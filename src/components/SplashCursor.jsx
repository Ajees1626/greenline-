import { useEffect, useRef } from 'react'

// Primary color #BBE2D4 (normalized 0-1 for WebGL)
const PRIMARY_COLOR = { r: 187 / 255, g: 226 / 255, b: 212 / 255 }

function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function pointerPrototype() {
      this.id = -1
      this.texcoordX = 0
      this.texcoordY = 0
      this.prevTexcoordX = 0
      this.prevTexcoordY = 0
      this.deltaX = 0
      this.deltaY = 0
      this.down = false
      this.moved = false
      this.color = [0, 0, 0]
    }

    const config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR,
      TRANSPARENT
    }

    const pointers = [new pointerPrototype()]

    const { gl, ext } = getWebGLContext(canvas)
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256
      config.SHADING = false
    }

    function getWebGLContext(canvas) {
      const params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        preserveDrawingBuffer: false
      }
      let gl = canvas.getContext('webgl2', params)
      const isWebGL2 = !!gl
      if (!isWebGL2) gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)
      let halfFloat
      if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float')
      } else {
        halfFloat = gl.getExtension('OES_texture_half_float')
      }
      const supportLinearFiltering = isWebGL2
        ? gl.getExtension('OES_texture_float_linear')
        : gl.getExtension('OES_texture_half_float_linear')
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat?.HALF_FLOAT_OES
      let formatRGBA, formatRG, formatR
      if (isWebGL2) {
        formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType)
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType)
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType)
      } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType)
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType)
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType)
      }
      return {
        gl,
        ext: { formatRGBA, formatRG, formatR, halfFloatTexType, supportLinearFiltering }
      }
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case gl.R16F:
            return getSupportedFormat(gl, gl.RG16F, gl.RG, type)
          case gl.RG16F:
            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type)
          default:
            return null
        }
      }
      return { internalFormat, format }
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null)
      const fbo = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      return gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE
    }

    function hashCode(s) {
      if (s.length === 0) return 0
      let hash = 0
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i)
        hash |= 0
      }
      return hash
    }

    function compileShader(type, source, keywords) {
      if (keywords?.length) {
        source = keywords.map((k) => '#define ' + k + '\n').join('') + source
      }
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader))
      return shader
    }

    function createProgram(vertexShader, fragmentShader) {
      const program = gl.createProgram()
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program))
      return program
    }

    function getUniforms(program) {
      const uniforms = {}
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
      for (let i = 0; i < uniformCount; i++) {
        const name = gl.getActiveUniform(program, i).name
        uniforms[name] = gl.getUniformLocation(program, name)
      }
      return uniforms
    }

    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      `precision highp float; attribute vec2 aPosition; varying vec2 vUv,vL,vR,vT,vB; uniform vec2 texelSize;
       void main(){vUv=aPosition*0.5+0.5;vL=vUv-vec2(texelSize.x,0.0);vR=vUv+vec2(texelSize.x,0.0);vT=vUv+vec2(0.0,texelSize.y);vB=vUv-vec2(0.0,texelSize.y);gl_Position=vec4(aPosition,0.0,1.0);}`
    )

    const copyShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; void main(){gl_FragColor=texture2D(uTexture,vUv);}`)
    const clearShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value; void main(){gl_FragColor=value*texture2D(uTexture,vUv);}`)

    const displayShaderSource = `precision highp float; precision highp sampler2D; varying vec2 vUv,vL,vR,vT,vB; uniform sampler2D uTexture; uniform vec2 texelSize;
      void main(){vec3 c=texture2D(uTexture,vUv).rgb;
      #ifdef SHADING
      float dx=length(texture2D(uTexture,vR).rgb)-length(texture2D(uTexture,vL).rgb); float dy=length(texture2D(uTexture,vT).rgb)-length(texture2D(uTexture,vB).rgb);
      vec3 n=normalize(vec3(dx,dy,length(texelSize))); c*=clamp(dot(n,vec3(0.,0.,1.))+0.7,0.7,1.0);
      #endif
      gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));}`

    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius;
       void main(){vec2 p=vUv-point.xy;p.x*=aspectRatio;vec3 splat=exp(-dot(p,p)/radius)*color;gl_FragColor=vec4(texture2D(uTarget,vUv).xyz+splat,1.0);}`
    )

    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uVelocity,uSource; uniform vec2 texelSize,dyeTexelSize; uniform float dt,dissipation;
       void main(){vec2 coord=vUv-dt*texture2D(uVelocity,vUv).xy*texelSize;gl_FragColor=texture2D(uSource,coord)/(1.0+dissipation*dt);}`,
      ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
    )

    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv,vL,vR,vT,vB; uniform sampler2D uVelocity;
      void main(){float L=texture2D(uVelocity,vL).x,R=texture2D(uVelocity,vR).x,T=texture2D(uVelocity,vT).y,B=texture2D(uVelocity,vB).y; vec2 C=texture2D(uVelocity,vUv).xy;
      if(vL.x<0.)L=-C.x;if(vR.x>1.)R=-C.x;if(vT.y>1.)T=-C.y;if(vB.y<0.)B=-C.y;
      gl_FragColor=vec4(0.5*(R-L+T-B),0.,0.,1.);}`)

    const curlShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv,vL,vR,vT,vB; uniform sampler2D uVelocity;
      void main(){float L=texture2D(uVelocity,vL).y,R=texture2D(uVelocity,vR).y,T=texture2D(uVelocity,vT).x,B=texture2D(uVelocity,vB).x; gl_FragColor=vec4(0.5*(R-L-T+B),0.,0.,1.);}`)

    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `precision highp float; precision highp sampler2D; varying vec2 vUv,vL,vR,vT,vB; uniform sampler2D uVelocity,uCurl; uniform float curl,dt;
      void main(){float L=texture2D(uCurl,vL).x,R=texture2D(uCurl,vR).x,T=texture2D(uCurl,vT).x,B=texture2D(uCurl,vB).x,C=texture2D(uCurl,vUv).x;
      vec2 force=0.5*vec2(abs(T)-abs(B),abs(R)-abs(L));force/=length(force)+0.0001;force*=curl*C;force.y*=-1.;
      vec2 velocity=texture2D(uVelocity,vUv).xy;velocity+=force*dt;gl_FragColor=vec4(min(max(velocity,-1000.),1000.),0.,1.);}`)

    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv,vL,vR,vT,vB; uniform sampler2D uPressure,uDivergence;
      void main(){float L=texture2D(uPressure,vL).x,R=texture2D(uPressure,vR).x,T=texture2D(uPressure,vT).x,B=texture2D(uPressure,vB).x; float div=texture2D(uDivergence,vUv).x;
      gl_FragColor=vec4((L+R+B+T-div)*0.25,0.,0.,1.);}`)

    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; precision mediump sampler2D; varying highp vec2 vUv,vL,vR,vT,vB; uniform sampler2D uPressure,uVelocity;
      void main(){float L=texture2D(uPressure,vL).x,R=texture2D(uPressure,vR).x,T=texture2D(uPressure,vT).x,B=texture2D(uPressure,vB).x; vec2 v=texture2D(uVelocity,vUv).xy; v-=vec2(R-L,T-B); gl_FragColor=vec4(v,0.,1.);}`)

    class Material {
      constructor(vertexShader, fragmentShaderSource) {
        this.vertexShader = vertexShader
        this.fragmentShaderSource = fragmentShaderSource
        this.programs = {}
        this.activeProgram = null
        this.uniforms = []
      }
      setKeywords(keywords) {
        const hash = keywords ? keywords.reduce((h, k) => h + hashCode(k), 0) : 0
        let program = this.programs[hash]
        if (!program) {
          const source = keywords?.length ? keywords.map((k) => '#define ' + k + '\n').join('') + this.fragmentShaderSource : this.fragmentShaderSource
          program = createProgram(this.vertexShader, compileShader(gl.FRAGMENT_SHADER, source))
          this.programs[hash] = program
        }
        if (program === this.activeProgram) return
        this.uniforms = getUniforms(program)
        this.activeProgram = program
      }
      bind() {
        gl.useProgram(this.activeProgram)
      }
    }

    class Program {
      constructor(vertexShader, fragmentShader) {
        this.program = createProgram(vertexShader, fragmentShader)
        this.uniforms = getUniforms(this.program)
      }
      bind() {
        gl.useProgram(this.program)
      }
    }

    const blit = (() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW)
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(0)
      return (target, clear = false) => {
        if (target == null) {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
          gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        } else {
          gl.viewport(0, 0, target.width, target.height)
          gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
        }
        if (clear) {
          gl.clearColor(0, 0, 0, 1)
          gl.clear(gl.COLOR_BUFFER_BIT)
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
      }
    })()

    let dye, velocity, divergence, curl, pressure
    const copyProgram = new Program(baseVertexShader, copyShader)
    const clearProgram = new Program(baseVertexShader, clearShader)
    const splatProgram = new Program(baseVertexShader, splatShader)
    const advectionProgram = new Program(baseVertexShader, advectionShader)
    const divergenceProgram = new Program(baseVertexShader, divergenceShader)
    const curlProgram = new Program(baseVertexShader, curlShader)
    const vorticityProgram = new Program(baseVertexShader, vorticityShader)
    const pressureProgram = new Program(baseVertexShader, pressureShader)
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader)
    const displayMaterial = new Material(baseVertexShader, displayShaderSource)

    function getResolution(resolution) {
      let ar = gl.drawingBufferWidth / gl.drawingBufferHeight
      if (ar < 1) ar = 1 / ar
      const min = Math.round(resolution)
      const max = Math.round(resolution * ar)
      return gl.drawingBufferWidth > gl.drawingBufferHeight ? { width: max, height: min } : { width: min, height: max }
    }

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0)
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)
      const fbo = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      gl.viewport(0, 0, w, h)
      gl.clear(gl.COLOR_BUFFER_BIT)
      return { texture, fbo, width: w, height: h, texelSizeX: 1 / w, texelSizeY: 1 / h, attach(id) { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, texture); return id } }
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param)
      let fbo2 = createFBO(w, h, internalFormat, format, type, param)
      return {
        width: w, height: h, texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY,
        get read() { return fbo1 }, set read(v) { fbo1 = v },
        get write() { return fbo2 }, set write(v) { fbo2 = v },
        swap() { const t = fbo1; fbo1 = fbo2; fbo2 = t }
      }
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      const newFBO = createFBO(w, h, internalFormat, format, type, param)
      copyProgram.bind()
      gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0))
      blit(newFBO)
      return newFBO
    }

    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
      if (target.width === w && target.height === h) return target
      target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param)
      target.write = createFBO(w, h, internalFormat, format, type, param)
      target.width = w
      target.height = h
      target.texelSizeX = 1 / w
      target.texelSizeY = 1 / h
      return target
    }

    function initFramebuffers() {
      const simRes = getResolution(config.SIM_RESOLUTION)
      const dyeRes = getResolution(config.DYE_RESOLUTION)
      const texType = ext.halfFloatTexType
      const rgba = ext.formatRGBA
      const rg = ext.formatRG
      const r = ext.formatR
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
      gl.disable(gl.BLEND)
      if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering)
      else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering)
      if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering)
      else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering)
      divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST)
      curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST)
      pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST)
    }

    function updateKeywords() {
      displayMaterial.setKeywords(config.SHADING ? ['SHADING'] : [])
    }

    // Primary color only (no random colors)
    function getPrimaryColor() {
      return {
        r: PRIMARY_COLOR.r * 0.25,
        g: PRIMARY_COLOR.g * 0.25,
        b: PRIMARY_COLOR.b * 0.25
      }
    }

    function updatePointerDownData(pointer, id, posX, posY) {
      pointer.id = id
      pointer.down = true
      pointer.moved = false
      pointer.texcoordX = posX / canvas.width
      pointer.texcoordY = 1.0 - posY / canvas.height
      pointer.prevTexcoordX = pointer.texcoordX
      pointer.prevTexcoordY = pointer.texcoordY
      pointer.deltaX = 0
      pointer.deltaY = 0
      pointer.color = getPrimaryColor()
    }

    function updatePointerMoveData(pointer, posX, posY) {
      pointer.prevTexcoordX = pointer.texcoordX
      pointer.prevTexcoordY = pointer.texcoordY
      pointer.texcoordX = posX / canvas.width
      pointer.texcoordY = 1.0 - posY / canvas.height
      let dx = pointer.texcoordX - pointer.prevTexcoordX
      let dy = pointer.texcoordY - pointer.prevTexcoordY
      if (canvas.width / canvas.height < 1) dx *= canvas.width / canvas.height
      if (canvas.width / canvas.height > 1) dy /= canvas.width / canvas.height
      pointer.deltaX = dx
      pointer.deltaY = dy
      pointer.moved = Math.abs(dx) > 0 || Math.abs(dy) > 0
    }

    function updatePointerUpData(pointer) {
      pointer.down = false
    }

    function correctRadius(radius) {
      const ar = canvas.width / canvas.height
      return ar > 1 ? radius * ar : radius
    }

    function splat(x, y, dx, dy, color) {
      splatProgram.bind()
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0))
      gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height)
      gl.uniform2f(splatProgram.uniforms.point, x, y)
      gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0)
      gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100))
      blit(velocity.write)
      velocity.swap()
      gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0))
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b)
      blit(dye.write)
      dye.swap()
    }

    function splatPointer(pointer) {
      const dx = pointer.deltaX * config.SPLAT_FORCE
      const dy = pointer.deltaY * config.SPLAT_FORCE
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color)
    }

    function clickSplat(pointer) {
      const color = { r: PRIMARY_COLOR.r * 10, g: PRIMARY_COLOR.g * 10, b: PRIMARY_COLOR.b * 10 }
      splat(pointer.texcoordX, pointer.texcoordY, 10 * (Math.random() - 0.5), 30 * (Math.random() - 0.5), color)
    }

    let lastUpdateTime = Date.now()
    function calcDeltaTime() {
      const now = Date.now()
      const dt = Math.min((now - lastUpdateTime) / 1000, 0.016666)
      lastUpdateTime = now
      return dt
    }

    function scaleByPixelRatio(input) {
      return Math.floor(input * (window.devicePixelRatio || 1))
    }

    function resizeCanvas() {
      const width = scaleByPixelRatio(canvas.clientWidth)
      const height = scaleByPixelRatio(canvas.clientHeight)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true
      }
      return false
    }

    function applyInputs() {
      pointers.forEach((p) => {
        if (p.moved) {
          p.moved = false
          splatPointer(p)
        }
      })
    }

    function step(dt) {
      gl.disable(gl.BLEND)
      curlProgram.bind()
      gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0))
      blit(curl)
      vorticityProgram.bind()
      gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0))
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1))
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL)
      gl.uniform1f(vorticityProgram.uniforms.dt, dt)
      blit(velocity.write)
      velocity.swap()
      divergenceProgram.bind()
      gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0))
      blit(divergence)
      clearProgram.bind()
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0))
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE)
      blit(pressure.write)
      pressure.swap()
      pressureProgram.bind()
      gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0))
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1))
        blit(pressure.write)
        pressure.swap()
      }
      gradienSubtractProgram.bind()
      gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0))
      gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1))
      blit(velocity.write)
      velocity.swap()
      advectionProgram.bind()
      gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY)
      if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY)
      let vid = velocity.read.attach(0)
      gl.uniform1i(advectionProgram.uniforms.uVelocity, vid)
      gl.uniform1i(advectionProgram.uniforms.uSource, vid)
      gl.uniform1f(advectionProgram.uniforms.dt, dt)
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION)
      blit(velocity.write)
      velocity.swap()
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0))
      gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1))
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION)
      blit(dye.write)
      dye.swap()
    }

    function drawDisplay(target) {
      const width = target == null ? gl.drawingBufferWidth : target.width
      const height = target == null ? gl.drawingBufferHeight : target.height
      displayMaterial.bind()
      if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1 / width, 1 / height)
      gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0))
      blit(target)
    }

    function render(target) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      gl.enable(gl.BLEND)
      drawDisplay(target)
    }

    function updateFrame() {
      const dt = calcDeltaTime()
      if (resizeCanvas()) initFramebuffers()
      applyInputs()
      step(dt)
      render(null)
      requestAnimationFrame(updateFrame)
    }

    updateKeywords()
    initFramebuffers()

    const handleMouseDown = (e) => {
      const pointer = pointers[0]
      const posX = scaleByPixelRatio(e.clientX)
      const posY = scaleByPixelRatio(e.clientY)
      updatePointerDownData(pointer, -1, posX, posY)
      clickSplat(pointer)
    }

    const handleMouseMove = (e) => {
      const pointer = pointers[0]
      updatePointerMoveData(pointer, scaleByPixelRatio(e.clientX), scaleByPixelRatio(e.clientY))
    }

    const handleTouchStart = (e) => {
      const touches = e.targetTouches
      const pointer = pointers[0]
      for (let i = 0; i < touches.length; i++) {
        updatePointerDownData(pointer, touches[i].identifier, scaleByPixelRatio(touches[i].clientX), scaleByPixelRatio(touches[i].clientY))
      }
    }

    const handleTouchMove = (e) => {
      const touches = e.targetTouches
      const pointer = pointers[0]
      for (let i = 0; i < touches.length; i++) {
        updatePointerMoveData(pointer, scaleByPixelRatio(touches[i].clientX), scaleByPixelRatio(touches[i].clientY))
      }
    }

    const handleTouchEnd = () => {
      updatePointerUpData(pointers[0])
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    let rafId
    const start = () => {
      rafId = requestAnimationFrame(updateFrame)
    }
    document.body.addEventListener('mousemove', start, { once: true })
    document.body.addEventListener('touchstart', start, { once: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      document.body.removeEventListener('mousemove', start)
      document.body.removeEventListener('touchstart', start)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default SplashCursor
