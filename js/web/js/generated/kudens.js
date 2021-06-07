if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kudens'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kudens'.");
}var kudens = function (_, Kotlin) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Exception = Kotlin.kotlin.Exception;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var Array_0 = Array;
  var Math_0 = Math;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var math = Kotlin.kotlin.math;
  var toString = Kotlin.toString;
  DrawMode.prototype = Object.create(Enum.prototype);
  DrawMode.prototype.constructor = DrawMode;
  DefaultScreen.prototype = Object.create(Screen.prototype);
  DefaultScreen.prototype.constructor = DefaultScreen;
  ViewType.prototype = Object.create(Enum.prototype);
  ViewType.prototype.constructor = ViewType;
  var Color_instance = null;
  function DrawMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DrawMode_initFields() {
    DrawMode_initFields = function () {
    };
    DrawMode$LINEAR_instance = new DrawMode('LINEAR', 0);
    DrawMode$NEAREST_instance = new DrawMode('NEAREST', 1);
  }
  var DrawMode$LINEAR_instance;
  function DrawMode$LINEAR_getInstance() {
    DrawMode_initFields();
    return DrawMode$LINEAR_instance;
  }
  var DrawMode$NEAREST_instance;
  function DrawMode$NEAREST_getInstance() {
    DrawMode_initFields();
    return DrawMode$NEAREST_instance;
  }
  DrawMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'DrawMode', interfaces: [Enum]};
  function DrawMode$values() {
    return [DrawMode$LINEAR_getInstance(), DrawMode$NEAREST_getInstance()];
  }
  DrawMode.values = DrawMode$values;
  function DrawMode$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return DrawMode$LINEAR_getInstance();
      case 'NEAREST':
        return DrawMode$NEAREST_getInstance();
      default:throwISE('No enum constant games.perses.game.DrawMode.' + name);
    }
  }
  DrawMode.valueOf_61zpoe$ = DrawMode$valueOf;
  function HTMLElements() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.container = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : throwCCE();
    this.webgl = null;
    this.canvas2d = null;
    var webGlCanvas = Kotlin.isType(tmp$_0 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_0 : throwCCE();
    var canvas = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : throwCCE();
    this.container.setAttribute('style', 'position: absolute; left: 0px; top: 0px;');
    webGlCanvas.setAttribute('style', 'position: absolute; left: 0px; top: 0px;');
    canvas.setAttribute('style', 'position: absolute; left: 0px; top: 0px; z-index: 10; width: 1000px; height: 500px;');
    ensureNotNull(document.body).appendChild(this.container);
    this.container.appendChild(webGlCanvas);
    this.container.appendChild(canvas);
    var canvas2dcanvas = canvas.getContext('2d');
    var webglcanvas = webGlCanvas.getContext('webgl');
    if (webglcanvas == null) {
      console.log('webgl context not found, trying experimental-webgl.');
      webglcanvas = webGlCanvas.getContext('experimental-webgl');
    }if (webglcanvas != null) {
      this.webgl = Kotlin.isType(tmp$_2 = webglcanvas, WebGLRenderingContext) ? tmp$_2 : throwCCE();
    } else {
      console.log('webgl?', webglcanvas);
      window.alert("Your browser doesn't seem to support webgl!");
      throw IllegalStateException_init("Your browser doesn't seem to support webgl!");
    }
    if (canvas2dcanvas != null) {
      this.canvas2d = Kotlin.isType(tmp$_3 = canvas2dcanvas, CanvasRenderingContext2D) ? tmp$_3 : throwCCE();
    } else {
      console.log('canvas2d?', canvas2dcanvas);
      window.alert("Your browser doesn't seem to support 2d canvas!");
      throw IllegalStateException_init("Your browser doesn't seem to support webgl!");
    }
  }
  HTMLElements.$metadata$ = {kind: Kind_CLASS, simpleName: 'HTMLElements', interfaces: []};
  function Game() {
    Game_instance = this;
    this.started = false;
    this.view = new View();
    this.html_es6yz6$_0 = lazy(Game$html$lambda);
    this.currentScreen = new DefaultScreen();
    this.start = (new Date()).getTime();
    this.currentTime = this.start;
    this.currentDelta = 0.0;
    this.pause = false;
    this.clearScreenEveryFrame = true;
    this.clearRed = 0.0;
    this.clearGreen = 0.0;
    this.clearBlue = 0.0;
    this.clearAlpha = 1.0;
    this.fps = 0;
    this.fpsCount = 0;
    this.fpsCountTime = 0.0;
    this.borderLeft = 0;
    this.borderTop = 0;
    this.focus = true;
    window.onfocus = Game_init$lambda(this);
    window.onblur = Game_init$lambda_0(this);
  }
  Object.defineProperty(Game.prototype, 'html', {get: function () {
    return this.html_es6yz6$_0.value;
  }});
  Game.prototype.gl = function () {
    return this.html.webgl;
  };
  Game.prototype.resize = function () {
    var canvas = this.gl().canvas;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if (this.view.lastWindowWidth !== windowWidth || this.view.lastWindowHeight !== windowHeight) {
      this.view.lastWindowWidth = windowWidth;
      this.view.lastWindowHeight = windowHeight;
      this.view.windowWidth = windowWidth;
      this.view.windowHeight = windowHeight;
      this.view.updateView();
      var textCanvas = this.html.canvas2d.canvas;
      canvas.width = numberToInt(this.view.width);
      canvas.height = numberToInt(this.view.height);
      textCanvas.width = numberToInt(this.view.width);
      textCanvas.height = numberToInt(this.view.height);
      this.gl().viewport(0, 0, numberToInt(this.view.width), numberToInt(this.view.height));
      this.borderLeft = (windowWidth - this.view.windowWidth | 0) / 2 | 0;
      this.borderTop = (windowHeight - this.view.windowHeight | 0) / 2 | 0;
      canvas.setAttribute('style', 'position: absolute; left: ' + this.borderLeft + 'px; top: ' + this.borderTop + 'px; z-index: 5; ' + ('width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;'));
      textCanvas.setAttribute('style', 'position: absolute; left: ' + this.borderLeft + 'px; top: ' + this.borderTop + 'px; z-index: 10; ' + ('width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;'));
    }};
  Game.prototype.start_lbnb05$ = function (startScreen) {
    if (this.started) {
      throw IllegalStateException_init('You can only start a game once!');
    }this.setScreen_lbnb05$(startScreen);
    this.started = true;
    this.gameLoop();
  };
  Game.prototype.setScreen_lbnb05$ = function (screen) {
    this.currentScreen.unloadResources();
    this.currentScreen = screen;
    screen.loadResources();
  };
  Game.prototype.setClearColor_7b5o5w$ = function (r, g, b, a) {
    this.clearRed = r;
    this.clearGreen = g;
    this.clearBlue = b;
    this.clearAlpha = a;
  };
  function Game$gameLoop$lambda(this$Game) {
    return function (it) {
      this$Game.gameLoop();
      return Unit;
    };
  }
  Game.prototype.gameLoop = function () {
    try {
      if (!Textures_getInstance().ready()) {
        this.gl().clearColor(1.0, 1.0, 1.0, 1.0);
        this.gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      } else {
        this.resize();
        if (!this.pause) {
          this.html.canvas2d.clearRect(0.0, 0.0, this.view.width, this.view.height);
          if (this.clearScreenEveryFrame) {
            this.gl().clearColor(this.clearRed, this.clearGreen, this.clearBlue, this.clearAlpha);
            this.gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
          }this.gl().enable(WebGLRenderingContext.BLEND);
          this.gl().blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          var time = (new Date()).getTime();
          this.currentDelta = (time - this.currentTime) / 1000.0;
          this.currentTime = time;
          var timeInSeconds = (this.currentTime - this.start) / 1000.0;
          this.fpsCountTime += this.currentDelta;
          this.fpsCount = this.fpsCount + 1 | 0;
          while (this.fpsCountTime > 1.0) {
            this.fps = this.fpsCount;
            this.fpsCountTime -= 1.0;
            this.fpsCount = 0;
          }
          if (this.focus) {
            this.currentScreen.update_dleff0$(timeInSeconds, this.currentDelta);
          }this.currentScreen.render();
        }}
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println('Some error...');
        console.log(e);
      } else
        throw e;
    }
    window.requestAnimationFrame(Game$gameLoop$lambda(this));
  };
  function Game$html$lambda() {
    return new HTMLElements();
  }
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.focus = true;
      return '';
    };
  }
  function Game_init$lambda_0(this$Game) {
    return function (it) {
      this$Game.focus = false;
      return '';
    };
  }
  Game.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Game', interfaces: []};
  var Game_instance = null;
  function Game_getInstance() {
    if (Game_instance === null) {
      new Game();
    }return Game_instance;
  }
  function Screen() {
  }
  Screen.prototype.loadResources = function () {
  };
  Screen.prototype.closeResources = function () {
    this.unloadResources();
  };
  Screen.prototype.unloadResources = function () {
  };
  Screen.$metadata$ = {kind: Kind_CLASS, simpleName: 'Screen', interfaces: []};
  function DefaultScreen() {
    Screen.call(this);
  }
  DefaultScreen.prototype.update_dleff0$ = function (time, delta) {
  };
  DefaultScreen.prototype.render = function () {
    Game_getInstance().gl().clearColor(1.0, 1.0, 0.0, 1.0);
    Game_getInstance().gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
  };
  DefaultScreen.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultScreen', interfaces: [Screen]};
  function ViewType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ViewType_initFields() {
    ViewType_initFields = function () {
    };
    ViewType$PROJECTION_instance = new ViewType('PROJECTION', 0);
    ViewType$WIDTH_instance = new ViewType('WIDTH', 1);
    ViewType$HEIGHT_instance = new ViewType('HEIGHT', 2);
    ViewType$ABSOLUTE_instance = new ViewType('ABSOLUTE', 3);
  }
  var ViewType$PROJECTION_instance;
  function ViewType$PROJECTION_getInstance() {
    ViewType_initFields();
    return ViewType$PROJECTION_instance;
  }
  var ViewType$WIDTH_instance;
  function ViewType$WIDTH_getInstance() {
    ViewType_initFields();
    return ViewType$WIDTH_instance;
  }
  var ViewType$HEIGHT_instance;
  function ViewType$HEIGHT_getInstance() {
    ViewType_initFields();
    return ViewType$HEIGHT_instance;
  }
  var ViewType$ABSOLUTE_instance;
  function ViewType$ABSOLUTE_getInstance() {
    ViewType_initFields();
    return ViewType$ABSOLUTE_instance;
  }
  ViewType.$metadata$ = {kind: Kind_CLASS, simpleName: 'ViewType', interfaces: [Enum]};
  function ViewType$values() {
    return [ViewType$PROJECTION_getInstance(), ViewType$WIDTH_getInstance(), ViewType$HEIGHT_getInstance(), ViewType$ABSOLUTE_getInstance()];
  }
  ViewType.values = ViewType$values;
  function ViewType$valueOf(name) {
    switch (name) {
      case 'PROJECTION':
        return ViewType$PROJECTION_getInstance();
      case 'WIDTH':
        return ViewType$WIDTH_getInstance();
      case 'HEIGHT':
        return ViewType$HEIGHT_getInstance();
      case 'ABSOLUTE':
        return ViewType$ABSOLUTE_getInstance();
      default:throwISE('No enum constant games.perses.game.ViewType.' + name);
    }
  }
  ViewType.valueOf_61zpoe$ = ViewType$valueOf;
  function View(lastWindowWidth, lastWindowHeight, windowWidth, windowHeight, width, height, angle, near, far, minAspectRatio, maxAspectRatio, leftOffset, bottomOffset, viewType, drawMode) {
    if (lastWindowWidth === void 0)
      lastWindowWidth = 2000;
    if (lastWindowHeight === void 0)
      lastWindowHeight = 1000;
    if (windowWidth === void 0)
      windowWidth = 2000;
    if (windowHeight === void 0)
      windowHeight = 1000;
    if (width === void 0)
      width = 1024.0;
    if (height === void 0)
      height = 1024.0;
    if (angle === void 0)
      angle = 60.0;
    if (near === void 0)
      near = -0.1;
    if (far === void 0)
      far = -100.0;
    if (minAspectRatio === void 0)
      minAspectRatio = 1.0;
    if (maxAspectRatio === void 0)
      maxAspectRatio = 1.0;
    if (leftOffset === void 0)
      leftOffset = 0;
    if (bottomOffset === void 0)
      bottomOffset = 0;
    if (viewType === void 0)
      viewType = ViewType$WIDTH_getInstance();
    if (drawMode === void 0)
      drawMode = DrawMode$LINEAR_getInstance();
    this.lastWindowWidth = lastWindowWidth;
    this.lastWindowHeight = lastWindowHeight;
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.near = near;
    this.far = far;
    this.minAspectRatio = minAspectRatio;
    this.maxAspectRatio = maxAspectRatio;
    this.leftOffset = leftOffset;
    this.bottomOffset = bottomOffset;
    this.viewType = viewType;
    this.drawMode = drawMode;
    this.vMatrix = new Matrix4();
    this.aspectRatio = 1.0;
    this.updateView();
  }
  View.prototype.requestFullscreen = function () {
    var element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }};
  View.prototype.exitFullscreen = function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }};
  View.prototype.switchFullscreen = function () {
    if (this.isFullscreen()) {
      this.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  };
  View.prototype.isFullscreen = function () {
    var fse = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    return fse != undefined;
  };
  View.prototype.updateView = function () {
    this.aspectRatio = this.windowWidth / this.windowHeight;
    if (this.aspectRatio < this.minAspectRatio) {
      this.aspectRatio = this.minAspectRatio;
      this.windowHeight = numberToInt(this.windowWidth / this.aspectRatio);
    }if (this.aspectRatio > this.maxAspectRatio) {
      this.aspectRatio = this.maxAspectRatio;
      this.windowWidth = numberToInt(this.windowHeight * this.aspectRatio);
    }switch (this.viewType.name) {
      case 'ABSOLUTE':
        this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
        break;
      case 'WIDTH':
        this.height = this.width / this.aspectRatio;
        this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
        break;
      case 'HEIGHT':
        this.width = this.height * this.aspectRatio;
        this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
        break;
      case 'PROJECTION':
        this.vMatrix.setPerspectiveProjection_7b5o5w$(this.angle, this.aspectRatio, this.near, this.far);
        break;
      default:throw IllegalStateException_init('ViewType ' + this.viewType + ' not implemented!');
    }
  };
  View.prototype.screenToGameCoordX_mx4ult$ = function (screenX) {
    var result = screenX;
    switch (this.viewType.name) {
      case 'ABSOLUTE':
        break;
      case 'WIDTH':
      case 'HEIGHT':
        result = (screenX - Game_getInstance().borderLeft) * this.width / this.windowWidth;
        break;
      case 'PROJECTION':
        break;
      default:throw IllegalStateException_init('ViewType ' + this.viewType + ' not implemented!');
    }
    return result;
  };
  View.prototype.screenToGameCoordY_mx4ult$ = function (screenY) {
    var result = screenY;
    switch (this.viewType.name) {
      case 'ABSOLUTE':
        break;
      case 'WIDTH':
      case 'HEIGHT':
        result = this.height - (screenY - Game_getInstance().borderTop) * this.height / this.windowHeight;
        break;
      case 'PROJECTION':
        break;
      default:throw IllegalStateException_init('ViewType ' + this.viewType + ' not implemented!');
    }
    return result;
  };
  View.prototype.gameToScreenCoordX_mx4ult$ = function (gameX) {
    var result = gameX;
    var normalizedX = gameX + this.width / 2;
    switch (this.viewType.name) {
      case 'ABSOLUTE':
        break;
      case 'WIDTH':
      case 'HEIGHT':
        result = gameX / this.width * this.windowWidth + Game_getInstance().borderLeft;
        break;
      case 'PROJECTION':
        break;
      default:throw IllegalStateException_init('ViewType ' + this.viewType + ' not implemented!');
    }
    return result;
  };
  View.prototype.gameToScreenCoordY_mx4ult$ = function (gameY) {
    var result = gameY;
    var normalizedY = gameY + this.height / 2;
    switch (this.viewType.name) {
      case 'ABSOLUTE':
        break;
      case 'WIDTH':
      case 'HEIGHT':
        result = this.height - gameY / this.height * this.windowHeight + Game_getInstance().borderTop;
        break;
      case 'PROJECTION':
        break;
      default:throw IllegalStateException_init('ViewType ' + this.viewType + ' not implemented!');
    }
    return result;
  };
  View.prototype.setToWidth_mx4ult$ = function (width) {
    this.width = width;
    this.viewType = ViewType$WIDTH_getInstance();
    this.updateView();
  };
  View.prototype.setToHeight_mx4ult$ = function (height) {
    this.height = height;
    this.viewType = ViewType$HEIGHT_getInstance();
    this.updateView();
  };
  View.prototype.setProjection_mx4ult$ = function (angle) {
    this.angle = angle;
    this.viewType = ViewType$PROJECTION_getInstance();
    this.updateView();
  };
  View.prototype.setNear_mx4ult$ = function (near) {
    this.near = near;
    this.updateView();
  };
  View.prototype.setFar_mx4ult$ = function (far) {
    this.far = far;
    this.updateView();
  };
  View.$metadata$ = {kind: Kind_CLASS, simpleName: 'View', interfaces: []};
  var KeyCode$BACKSPACE_instance;
  var KeyCode$TAB_instance;
  var KeyCode$ENTER_instance;
  var KeyCode$SHIFT_instance;
  var KeyCode$CTRL_instance;
  var KeyCode$ALT_instance;
  var KeyCode$PAUSE_BREAK_instance;
  var KeyCode$CAPS_LOCK_instance;
  var KeyCode$ESCAPE_instance;
  var KeyCode$SPACE_instance;
  var KeyCode$PAGE_UP_instance;
  var KeyCode$PAGE_DOWN_instance;
  var KeyCode$END_instance;
  var KeyCode$HOME_instance;
  var KeyCode$LEFT_ARROW_instance;
  var KeyCode$UP_ARROW_instance;
  var KeyCode$RIGHT_ARROW_instance;
  var KeyCode$DOWN_ARROW_instance;
  var KeyCode$INSERT_instance;
  var KeyCode$DELETE_instance;
  var KeyCode$NR_0_instance;
  var KeyCode$NR_1_instance;
  var KeyCode$NR_2_instance;
  var KeyCode$NR_3_instance;
  var KeyCode$NR_4_instance;
  var KeyCode$NR_5_instance;
  var KeyCode$NR_6_instance;
  var KeyCode$NR_7_instance;
  var KeyCode$NR_8_instance;
  var KeyCode$NR_9_instance;
  var KeyCode$A_instance;
  var KeyCode$B_instance;
  var KeyCode$C_instance;
  var KeyCode$D_instance;
  var KeyCode$E_instance;
  var KeyCode$F_instance;
  var KeyCode$G_instance;
  var KeyCode$H_instance;
  var KeyCode$I_instance;
  var KeyCode$J_instance;
  var KeyCode$K_instance;
  var KeyCode$L_instance;
  var KeyCode$M_instance;
  var KeyCode$N_instance;
  var KeyCode$O_instance;
  var KeyCode$P_instance;
  var KeyCode$Q_instance;
  var KeyCode$R_instance;
  var KeyCode$S_instance;
  var KeyCode$T_instance;
  var KeyCode$U_instance;
  var KeyCode$V_instance;
  var KeyCode$W_instance;
  var KeyCode$X_instance;
  var KeyCode$Y_instance;
  var KeyCode$Z_instance;
  var KeyCode$LEFT_WINDOW_KEY_instance;
  var KeyCode$RIGHT_WINDOW_KEY_instance;
  var KeyCode$SELECT_KEY_instance;
  var KeyCode$NUMPAD_0_instance;
  var KeyCode$NUMPAD_1_instance;
  var KeyCode$NUMPAD_2_instance;
  var KeyCode$NUMPAD_3_instance;
  var KeyCode$NUMPAD_4_instance;
  var KeyCode$NUMPAD_5_instance;
  var KeyCode$NUMPAD_6_instance;
  var KeyCode$NUMPAD_7_instance;
  var KeyCode$NUMPAD_8_instance;
  var KeyCode$NUMPAD_9_instance;
  var KeyCode$MULTIPLY_instance;
  var KeyCode$ADD_instance;
  var KeyCode$SUBTRACT_instance;
  var KeyCode$DECIMAL_POINT_instance;
  var KeyCode$DIVIDE_instance;
  var KeyCode$F1_instance;
  var KeyCode$F2_instance;
  var KeyCode$F3_instance;
  var KeyCode$F4_instance;
  var KeyCode$F5_instance;
  var KeyCode$F6_instance;
  var KeyCode$F7_instance;
  var KeyCode$F8_instance;
  var KeyCode$F9_instance;
  var KeyCode$F10_instance;
  var KeyCode$F11_instance;
  var KeyCode$F12_instance;
  var KeyCode$NUM_LOCK_instance;
  var KeyCode$SCROLL_LOCK_instance;
  var KeyCode$SEMI_COLON_instance;
  var KeyCode$EQUAL_SIGN_instance;
  var KeyCode$COMMA_instance;
  var KeyCode$DASH_instance;
  var KeyCode$PERIOD_instance;
  var KeyCode$FORWARD_SLASH_instance;
  var KeyCode$GRAVE_ACCENT_instance;
  var KeyCode$OPEN_BRACKET_instance;
  var KeyCode$BACK_SLASH_instance;
  var KeyCode$CLOSE_BRAKET_instance;
  var KeyCode$SINGLE_QUOTE_instance;
  var KeyCode$ESC_instance;
  var KeyCode$LEFT_instance;
  var KeyCode$UP_instance;
  var KeyCode$DOWN_instance;
  var KeyCode$RIGHT_instance;
  var KeyCode$MINUS_instance;
  var KeyCode$PLUS_instance;
  var Input_instance = null;
  function Matrix4() {
    this.matrix_8be2vx$ = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.temp_8be2vx$ = new Float32Array(16);
    this.translateMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.scaleMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateXMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateYMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateZMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
  }
  Matrix4.prototype.get = function () {
    return this.matrix_8be2vx$;
  };
  Matrix4.prototype.getFloat32Array = function () {
    return new Float32Array(toTypedArray(this.get()));
  };
  Matrix4.prototype.set_q3cr5i$ = function (values) {
    if (values.length !== 16) {
      throw IllegalArgumentException_init('Matrix size should be 16!');
    }this.matrix_8be2vx$ = values;
  };
  Matrix4.prototype.setPerspectiveProjection_7b5o5w$ = function (angle, imageAspectRatio, near, far) {
    var r = angle / 180.0 * math.PI;
    var x = r / 2.0;
    var f = 1.0 / Math_0.tan(x);
    this.matrix_8be2vx$[0] = f / imageAspectRatio;
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = f;
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = -(far + near) / (far - near);
    this.matrix_8be2vx$[11] = -1.0;
    this.matrix_8be2vx$[12] = 0.0;
    this.matrix_8be2vx$[13] = 0.0;
    this.matrix_8be2vx$[14] = -(2.0 * far * near) / (far - near);
    this.matrix_8be2vx$[15] = 0.0;
  };
  Matrix4.prototype.setOrthographicProjection_w8lrqs$ = function (left, right, bottom, top, near, far) {
    this.matrix_8be2vx$[0] = 2.0 / (right - left);
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = 2.0 / (top - bottom);
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = -2.0 / (far - near);
    this.matrix_8be2vx$[11] = 0.0;
    this.matrix_8be2vx$[12] = -(right + left) / (right - left);
    this.matrix_8be2vx$[13] = -(top + bottom) / (top - bottom);
    this.matrix_8be2vx$[14] = -(far + near) / (far - near);
    this.matrix_8be2vx$[15] = 1.0;
  };
  Matrix4.prototype.setToIdentity = function () {
    this.matrix_8be2vx$[0] = 1.0;
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = 1.0;
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = 1.0;
    this.matrix_8be2vx$[11] = 0.0;
    this.matrix_8be2vx$[12] = 0.0;
    this.matrix_8be2vx$[13] = 0.0;
    this.matrix_8be2vx$[14] = 0.0;
    this.matrix_8be2vx$[15] = 1.0;
  };
  Matrix4.prototype.mul_2qxizu$ = function (other) {
    this.mul_0(other.get());
  };
  Matrix4.prototype.mul_0 = function (other) {
    if (other.length !== 16) {
      throw IllegalArgumentException_init('Matrix size should be 16!');
    }this.temp_8be2vx$[0] = this.matrix_8be2vx$[0] * other[0] + this.matrix_8be2vx$[1] * other[4] + this.matrix_8be2vx$[2] * other[8] + this.matrix_8be2vx$[3] * other[12];
    this.temp_8be2vx$[1] = this.matrix_8be2vx$[0] * other[1] + this.matrix_8be2vx$[1] * other[5] + this.matrix_8be2vx$[2] * other[9] + this.matrix_8be2vx$[3] * other[13];
    this.temp_8be2vx$[2] = this.matrix_8be2vx$[0] * other[2] + this.matrix_8be2vx$[1] * other[6] + this.matrix_8be2vx$[2] * other[10] + this.matrix_8be2vx$[3] * other[14];
    this.temp_8be2vx$[3] = this.matrix_8be2vx$[0] * other[3] + this.matrix_8be2vx$[1] * other[7] + this.matrix_8be2vx$[2] * other[11] + this.matrix_8be2vx$[3] * other[15];
    this.temp_8be2vx$[4] = this.matrix_8be2vx$[4] * other[0] + this.matrix_8be2vx$[5] * other[4] + this.matrix_8be2vx$[6] * other[8] + this.matrix_8be2vx$[7] * other[12];
    this.temp_8be2vx$[5] = this.matrix_8be2vx$[4] * other[1] + this.matrix_8be2vx$[5] * other[5] + this.matrix_8be2vx$[6] * other[9] + this.matrix_8be2vx$[7] * other[13];
    this.temp_8be2vx$[6] = this.matrix_8be2vx$[4] * other[2] + this.matrix_8be2vx$[5] * other[6] + this.matrix_8be2vx$[6] * other[10] + this.matrix_8be2vx$[7] * other[14];
    this.temp_8be2vx$[7] = this.matrix_8be2vx$[4] * other[3] + this.matrix_8be2vx$[5] * other[7] + this.matrix_8be2vx$[6] * other[11] + this.matrix_8be2vx$[7] * other[15];
    this.temp_8be2vx$[8] = this.matrix_8be2vx$[8] * other[0] + this.matrix_8be2vx$[9] * other[4] + this.matrix_8be2vx$[10] * other[8] + this.matrix_8be2vx$[11] * other[12];
    this.temp_8be2vx$[9] = this.matrix_8be2vx$[8] * other[1] + this.matrix_8be2vx$[9] * other[5] + this.matrix_8be2vx$[10] * other[9] + this.matrix_8be2vx$[11] * other[13];
    this.temp_8be2vx$[10] = this.matrix_8be2vx$[8] * other[2] + this.matrix_8be2vx$[9] * other[6] + this.matrix_8be2vx$[10] * other[10] + this.matrix_8be2vx$[11] * other[14];
    this.temp_8be2vx$[11] = this.matrix_8be2vx$[8] * other[3] + this.matrix_8be2vx$[9] * other[7] + this.matrix_8be2vx$[10] * other[11] + this.matrix_8be2vx$[11] * other[15];
    this.temp_8be2vx$[12] = this.matrix_8be2vx$[12] * other[0] + this.matrix_8be2vx$[13] * other[4] + this.matrix_8be2vx$[14] * other[8] + this.matrix_8be2vx$[15] * other[12];
    this.temp_8be2vx$[13] = this.matrix_8be2vx$[12] * other[1] + this.matrix_8be2vx$[13] * other[5] + this.matrix_8be2vx$[14] * other[9] + this.matrix_8be2vx$[15] * other[13];
    this.temp_8be2vx$[14] = this.matrix_8be2vx$[12] * other[2] + this.matrix_8be2vx$[13] * other[6] + this.matrix_8be2vx$[14] * other[10] + this.matrix_8be2vx$[15] * other[14];
    this.temp_8be2vx$[15] = this.matrix_8be2vx$[12] * other[3] + this.matrix_8be2vx$[13] * other[7] + this.matrix_8be2vx$[14] * other[11] + this.matrix_8be2vx$[15] * other[15];
    this.matrix_8be2vx$[0] = this.temp_8be2vx$[0];
    this.matrix_8be2vx$[1] = this.temp_8be2vx$[1];
    this.matrix_8be2vx$[2] = this.temp_8be2vx$[2];
    this.matrix_8be2vx$[3] = this.temp_8be2vx$[3];
    this.matrix_8be2vx$[4] = this.temp_8be2vx$[4];
    this.matrix_8be2vx$[5] = this.temp_8be2vx$[5];
    this.matrix_8be2vx$[6] = this.temp_8be2vx$[6];
    this.matrix_8be2vx$[7] = this.temp_8be2vx$[7];
    this.matrix_8be2vx$[8] = this.temp_8be2vx$[8];
    this.matrix_8be2vx$[9] = this.temp_8be2vx$[9];
    this.matrix_8be2vx$[10] = this.temp_8be2vx$[10];
    this.matrix_8be2vx$[11] = this.temp_8be2vx$[11];
    this.matrix_8be2vx$[12] = this.temp_8be2vx$[12];
    this.matrix_8be2vx$[13] = this.temp_8be2vx$[13];
    this.matrix_8be2vx$[14] = this.temp_8be2vx$[14];
    this.matrix_8be2vx$[15] = this.temp_8be2vx$[15];
  };
  Matrix4.prototype.translate_y2kzbl$ = function (x, y, z) {
    this.translateMatrix_0[12] = x;
    this.translateMatrix_0[13] = y;
    this.translateMatrix_0[14] = z;
    this.mul_0(this.translateMatrix_0);
  };
  Matrix4.prototype.scale_y2kzbl$ = function (x, y, z) {
    this.scaleMatrix_0[0] = x;
    this.scaleMatrix_0[5] = y;
    this.scaleMatrix_0[10] = z;
    this.mul_0(this.scaleMatrix_0);
  };
  Matrix4.prototype.rotateX_mx4ult$ = function (angle) {
    this.rotateXMatrix_0[5] = Math_0.cos(angle);
    this.rotateXMatrix_0[6] = -Math_0.sin(angle);
    this.rotateXMatrix_0[9] = Math_0.sin(angle);
    this.rotateXMatrix_0[10] = Math_0.cos(angle);
    this.mul_0(this.rotateXMatrix_0);
  };
  Matrix4.prototype.rotateY_mx4ult$ = function (angle) {
    this.rotateYMatrix_0[0] = Math_0.cos(angle);
    this.rotateYMatrix_0[2] = Math_0.sin(angle);
    this.rotateYMatrix_0[8] = -Math_0.sin(angle);
    this.rotateYMatrix_0[10] = Math_0.cos(angle);
    this.mul_0(this.rotateYMatrix_0);
  };
  Matrix4.prototype.rotateZ_mx4ult$ = function (angle) {
    this.rotateZMatrix_0[0] = Math_0.cos(angle);
    this.rotateZMatrix_0[1] = Math_0.sin(angle);
    this.rotateZMatrix_0[4] = -Math_0.sin(angle);
    this.rotateZMatrix_0[5] = Math_0.cos(angle);
    this.mul_0(this.rotateZMatrix_0);
  };
  Matrix4.$metadata$ = {kind: Kind_CLASS, simpleName: 'Matrix4', interfaces: []};
  function ShaderProgram(webgl, drawType, vertexShaderSource, fragmentShaderSource, vainfo, setter) {
    this.webgl = webgl;
    this.drawType = drawType;
    this.vainfo = vainfo;
    this.setter = setter;
    this.shaderProgram = null;
    this.vertex = null;
    this.fragment = null;
    this.verticesBlockSize = 0;
    this.drawLength = 0;
    var tmp$, tmp$_0;
    this.vertex = this.compileShader_0(vertexShaderSource, WebGLRenderingContext.VERTEX_SHADER);
    this.fragment = this.compileShader_0(fragmentShaderSource, WebGLRenderingContext.FRAGMENT_SHADER);
    tmp$ = this.webgl.createProgram();
    if (tmp$ == null) {
      throw IllegalStateException_init('Unable to request shader program from webgl context!');
    }this.shaderProgram = tmp$;
    this.webgl.attachShader(this.shaderProgram, this.vertex);
    this.webgl.attachShader(this.shaderProgram, this.fragment);
    this.webgl.linkProgram(this.shaderProgram);
    if (equals(this.webgl.getProgramParameter(this.shaderProgram, WebGLRenderingContext.LINK_STATUS), false)) {
      throw IllegalStateException_init('Unable to compile shader program!');
    }this.webgl.useProgram(this.shaderProgram);
    this.verticesBlockSize = 0;
    tmp$_0 = Kotlin.arrayIterator(this.vainfo);
    while (tmp$_0.hasNext()) {
      var info = tmp$_0.next();
      info.location = this.webgl.getAttribLocation(this.shaderProgram, info.locationName);
      info.offset = this.verticesBlockSize;
      this.verticesBlockSize = this.verticesBlockSize + info.numElements | 0;
    }
    if (this.drawType === WebGLRenderingContext.TRIANGLES)
      this.drawLength = this.verticesBlockSize * 3 | 0;
    else {
      this.drawLength = this.verticesBlockSize;
    }
  }
  ShaderProgram.prototype.compileShader_0 = function (source, type) {
    var tmp$;
    tmp$ = this.webgl.createShader(type);
    if (tmp$ == null) {
      throw IllegalStateException_init('Unable to request shader from webgl context!');
    }var result = tmp$;
    this.webgl.shaderSource(result, source);
    this.webgl.compileShader(result);
    if (equals(this.webgl.getShaderParameter(result, WebGLRenderingContext.COMPILE_STATUS), false)) {
      throw IllegalStateException_init('Unable to compile shader!' + '\n' + source + '\n' + '\n' + toString(this.webgl.getShaderInfoLog(result)));
    }return result;
  };
  ShaderProgram.prototype.begin_v6ru81$ = function (attribBuffer, userdata) {
    var tmp$;
    this.webgl.useProgram(this.shaderProgram);
    this.webgl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, attribBuffer);
    tmp$ = Kotlin.arrayIterator(this.vainfo);
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      this.webgl.enableVertexAttribArray(info.location);
      this.webgl.vertexAttribPointer(info.location, info.numElements, WebGLRenderingContext.FLOAT, false, this.verticesBlockSize * 4 | 0, info.offset * 4 | 0);
    }
    this.setter(this, userdata);
  };
  ShaderProgram.prototype.end = function () {
    var tmp$;
    tmp$ = Kotlin.arrayIterator(this.vainfo);
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      this.webgl.disableVertexAttribArray(info.location);
    }
    this.webgl.useProgram(null);
  };
  ShaderProgram.prototype.getAttribLocation_61zpoe$ = function (location) {
    return this.webgl.getAttribLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.getUniformLocation_61zpoe$ = function (location) {
    return this.webgl.getUniformLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.setUniform1f_9sobi5$ = function (location, value) {
    this.webgl.uniform1f(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniform2f_9xt0da$ = function (location, v1, v2) {
    this.webgl.uniform2f(this.getUniformLocation_61zpoe$(location), v1, v2);
  };
  ShaderProgram.prototype.setUniform3f_rqqv31$ = function (location, v1, v2, v3) {
    this.webgl.uniform3f(this.getUniformLocation_61zpoe$(location), v1, v2, v3);
  };
  ShaderProgram.prototype.setUniform4f_kjn4ou$ = function (location, v1, v2, v3, v4) {
    this.webgl.uniform4f(this.getUniformLocation_61zpoe$(location), v1, v2, v3, v4);
  };
  ShaderProgram.prototype.setUniform1i_bm4lxs$ = function (location, value) {
    this.webgl.uniform1i(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniformMatrix4fv_pphpxd$ = function (location, value) {
    this.webgl.uniformMatrix4fv(this.getUniformLocation_61zpoe$(location), false, value);
  };
  ShaderProgram.$metadata$ = {kind: Kind_CLASS, simpleName: 'ShaderProgram', interfaces: []};
  function VertextAttributeInfo(locationName, numElements) {
    this.locationName = locationName;
    this.numElements = numElements;
    this.location = 0;
    this.offset = 0;
  }
  VertextAttributeInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'VertextAttributeInfo', interfaces: []};
  function ShaderProgramMesh(shaderProgram) {
    this.shaderProgram = shaderProgram;
    this.webgl = this.shaderProgram.webgl;
    this.data = new Float32Array(20000 - 20000 % this.shaderProgram.drawLength | 0);
    this.currentIndex = 0;
    this.attribBuffer = null;
    this.counter = 0;
    var tmp$;
    tmp$ = this.webgl.createBuffer();
    if (tmp$ == null) {
      throw IllegalStateException_init('Unable to create webgl buffer!');
    }this.attribBuffer = tmp$;
    this.webgl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.attribBuffer);
  }
  ShaderProgramMesh.prototype.queue_8cqhcw$ = function (vertices) {
    var tmp$, tmp$_0;
    for (tmp$ = 0; tmp$ !== vertices.length; ++tmp$) {
      var vertice = vertices[tmp$];
      this.data[tmp$_0 = this.currentIndex, this.currentIndex = tmp$_0 + 1 | 0, tmp$_0] = vertice;
    }
    if (this.bufferFull()) {
      println('Skipped draw call, to many values!');
      this.currentIndex = 0;
    }};
  ShaderProgramMesh.prototype.queueArray_o5v4nz$ = function (vertices) {
    this.data.set(vertices, this.currentIndex);
    this.currentIndex = this.currentIndex + vertices.length | 0;
    if (this.bufferFull()) {
      println('Skipped draw call, to many values!');
      this.currentIndex = 0;
    }};
  ShaderProgramMesh.prototype.remaining = function () {
    return this.data.length - this.currentIndex | 0;
  };
  ShaderProgramMesh.prototype.bufferFull = function () {
    return this.currentIndex === this.data.length;
  };
  ShaderProgramMesh.prototype.render_11rb$ = function (userdata) {
    this.counter = this.counter + 1 | 0;
    if (this.currentIndex > 0) {
      if (this.currentIndex % this.shaderProgram.verticesBlockSize !== 0) {
        throw IllegalStateException_init('Number of vertices not a multiple of the attribute block size!');
      }this.shaderProgram.begin_v6ru81$(this.attribBuffer, userdata);
      this.webgl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, this.data, WebGLRenderingContext.DYNAMIC_DRAW);
      this.webgl.drawArrays(this.shaderProgram.drawType, 0, this.currentIndex / this.shaderProgram.verticesBlockSize | 0);
      this.currentIndex = 0;
      this.shaderProgram.end();
    }};
  ShaderProgramMesh.$metadata$ = {kind: Kind_CLASS, simpleName: 'ShaderProgramMesh', interfaces: []};
  var Music_instance = null;
  var Sounds_instance = null;
  function Texts() {
    Texts_instance = this;
  }
  Texts.prototype.drawText_k35s1u$ = function (x, y, message, font, fillStyle) {
    if (font === void 0)
      font = 'bold 24pt Arial';
    if (fillStyle === void 0)
      fillStyle = 'white';
    var yy = y;
    var xx = x;
    if (yy < 0) {
      yy += Game_getInstance().view.height;
    }if (xx < 0) {
      xx += Game_getInstance().view.width;
    }yy = Game_getInstance().view.height - yy;
    Game_getInstance().html.canvas2d.fillStyle = fillStyle;
    Game_getInstance().html.canvas2d.font = font;
    Game_getInstance().html.canvas2d.fillText(message, x, yy);
  };
  Texts.prototype.drawLeftTop_k35s1u$ = function (left, top, message, font, fillStyle) {
    if (font === void 0)
      font = 'bold 24pt Arial';
    if (fillStyle === void 0)
      fillStyle = 'white';
    this.drawText_k35s1u$(left, top, message, font, fillStyle);
  };
  Texts.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Texts', interfaces: []};
  var Texts_instance = null;
  function Texts_getInstance() {
    if (Texts_instance === null) {
      new Texts();
    }return Texts_instance;
  }
  var vertexShaderSource;
  var fragmentShaderSource;
  function TextureData(vMatrix, texture) {
    this.vMatrix = vMatrix;
    this.texture = texture;
  }
  TextureData.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextureData', interfaces: []};
  function Texture(glTexture, shaderProgram, width, height) {
    this.glTexture = glTexture;
    this.width = width;
    this.height = height;
    this.shaderProgramMesh = new ShaderProgramMesh(shaderProgram);
    this.left = (-this.width | 0) / 2.0;
    this.right = this.width / 2.0;
    this.bottom = (-this.height | 0) / 2.0;
    this.top = this.height / 2.0;
  }
  Texture.prototype.queueDraw_7b5o5w$ = function (x, y, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.top, 0.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.bottom, 1.0, 0.0, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]);
    if (this.shaderProgramMesh.remaining() < 36) {
      this.render();
    }};
  Texture.prototype.queueTileDraw_nkj9yk$ = function (x, y, tcLeft, tcTop, tcRight, tcBottom, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.top, tcLeft, tcTop, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.top, tcRight, tcTop, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.top, tcRight, tcTop, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.right, this.bottom, tcRight, tcBottom, scale, rotation]);
    this.shaderProgramMesh.queueArray_o5v4nz$([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, rotation]);
    if (this.shaderProgramMesh.remaining() < 36) {
      this.render();
    }};
  Texture.prototype.queueTileDraw_6xtfaa$ = function (x, y, horCount, verCount, frame, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    var tcw = 1.0 / horCount;
    var tch = 1.0 / verCount;
    var tcx = frame % horCount * tcw;
    var tcy = 1.0 - (frame / horCount | 0) * tch;
    var left = (-(this.width / horCount | 0) | 0) / 2.0;
    var right = (this.width / horCount | 0) / 2.0;
    var bottom = (-(this.height / verCount | 0) | 0) / 2.0;
    var top = (this.height / verCount | 0) / 2.0;
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, bottom, tcx, tcy - tch, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, top, tcx, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, top, tcx + tcw, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, top, tcx + tcw, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, bottom, tcx + tcw, tcy - tch, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, bottom, tcx, tcy - tch, scale, rotation]));
    if (this.shaderProgramMesh.remaining() < 36) {
      this.render();
    }};
  Texture.prototype.render = function () {
    Game_getInstance().gl().activeTexture(WebGLRenderingContext.TEXTURE0);
    Game_getInstance().gl().bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTexture);
    this.shaderProgramMesh.render_11rb$(new TextureData(Game_getInstance().view.vMatrix, this.glTexture));
  };
  Texture.$metadata$ = {kind: Kind_CLASS, simpleName: 'Texture', interfaces: []};
  function Textures() {
    Textures_instance = this;
    this.textures = HashMap_init();
    this.startedLoading = 0;
    this.loaded = 0;
    this.shaderProgram = null;
    var setter = Textures_init$lambda;
    var vainfo = [new VertextAttributeInfo('a_position', 2), new VertextAttributeInfo('a_boundingBox', 2), new VertextAttributeInfo('a_texCoord', 2), new VertextAttributeInfo('a_scale', 1), new VertextAttributeInfo('a_rotation', 1)];
    this.shaderProgram = new ShaderProgram(Game_getInstance().gl(), WebGLRenderingContext.TRIANGLES, vertexShaderSource, fragmentShaderSource, vainfo, setter);
  }
  Textures.prototype.loadSpriteSheet_61zpoe$ = function (name) {
  };
  function Textures$load$lambda(closure$webGlTexture, closure$image, this$Textures, closure$name) {
    return function (it) {
      var tmp$;
      this$Textures.textureLoaded_0(closure$webGlTexture, closure$image);
      var texture = new Texture(closure$webGlTexture, this$Textures.shaderProgram, closure$image.width, closure$image.height);
      this$Textures.textures.put_xwzc9p$(closure$name, texture);
      return tmp$ = this$Textures.loaded, this$Textures.loaded = tmp$ + 1 | 0, tmp$;
    };
  }
  Textures.prototype.load_puj7f4$ = function (name, filename) {
    var tmp$;
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      var image = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
      image.onload = Textures$load$lambda(webGlTexture, image, this, name);
      image.src = filename;
    } else {
      throw IllegalStateException_init("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.create_bblzc9$ = function (name, image) {
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      this.textureLoaded_0(webGlTexture, image);
      var texture = new Texture(webGlTexture, this.shaderProgram, image.width, image.height);
      this.textures.put_xwzc9p$(name, texture);
      this.loaded = this.loaded + 1 | 0;
    } else {
      throw IllegalStateException_init("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.create_56dudh$ = function (name, width, height, image) {
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      this.textureLoaded_1(webGlTexture, width, height, image);
      var texture = new Texture(webGlTexture, this.shaderProgram, width, height);
      this.textures.put_xwzc9p$(name, texture);
      this.loaded = this.loaded + 1 | 0;
    } else {
      throw IllegalStateException_init("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.load_y153k1$ = function (mapTileSet) {
  };
  Textures.prototype.textureLoaded_0 = function (texture, image) {
    var gl = Game_getInstance().gl();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);
    this.setTextureParameters_0();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
  };
  Textures.prototype.textureLoaded_1 = function (texture, width, height, image) {
    var gl = Game_getInstance().gl();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);
    this.setTextureParameters_0();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
  };
  Textures.prototype.setTextureParameters_0 = function () {
    var gl = Game_getInstance().gl();
    if (Game_getInstance().view.drawMode === DrawMode$NEAREST_getInstance()) {
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
    } else {
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR);
    }
    gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
    gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
  };
  Textures.prototype.ready = function () {
    return this.loaded === this.startedLoading;
  };
  Textures.prototype.has_61zpoe$ = function (name) {
    return this.textures.get_11rb$(name) != null;
  };
  Textures.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.textures.get_11rb$(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Texture with name ' + name + ' is not loaded!');
    }return tmp$;
  };
  Textures.prototype.render = function () {
    var tmp$;
    tmp$ = this.textures.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      value.render();
    }
  };
  Textures.prototype.dispose = function () {
    var tmp$;
    var gl = Game_getInstance().gl();
    tmp$ = this.textures.values.iterator();
    while (tmp$.hasNext()) {
      var texture = tmp$.next();
      gl.deleteTexture(texture.glTexture);
    }
    this.startedLoading = 0;
    this.loaded = 0;
    this.textures.clear();
  };
  function Textures_init$lambda(program, data) {
    program.setUniform1i_bm4lxs$('u_sampler', 0);
    program.setUniformMatrix4fv_pphpxd$('u_projectionView', Game_getInstance().view.vMatrix.getFloat32Array());
    return Unit;
  }
  Textures.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Textures', interfaces: []};
  var Textures_instance = null;
  function Textures_getInstance() {
    if (Textures_instance === null) {
      new Textures();
    }return Textures_instance;
  }
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  Object.defineProperty(DrawMode, 'LINEAR', {get: DrawMode$LINEAR_getInstance});
  Object.defineProperty(DrawMode, 'NEAREST', {get: DrawMode$NEAREST_getInstance});
  var package$game = package$perses.game || (package$perses.game = {});
  package$game.DrawMode = DrawMode;
  package$game.HTMLElements = HTMLElements;
  Object.defineProperty(package$game, 'Game', {get: Game_getInstance});
  package$game.Screen = Screen;
  package$game.DefaultScreen = DefaultScreen;
  Object.defineProperty(ViewType, 'PROJECTION', {get: ViewType$PROJECTION_getInstance});
  Object.defineProperty(ViewType, 'WIDTH', {get: ViewType$WIDTH_getInstance});
  Object.defineProperty(ViewType, 'HEIGHT', {get: ViewType$HEIGHT_getInstance});
  Object.defineProperty(ViewType, 'ABSOLUTE', {get: ViewType$ABSOLUTE_getInstance});
  package$game.ViewType = ViewType;
  package$game.View = View;
  var package$math = package$perses.math || (package$perses.math = {});
  package$math.Matrix4 = Matrix4;
  var package$shader = package$perses.shader || (package$perses.shader = {});
  package$shader.ShaderProgram = ShaderProgram;
  package$shader.VertextAttributeInfo = VertextAttributeInfo;
  package$shader.ShaderProgramMesh = ShaderProgramMesh;
  var package$text = package$perses.text || (package$perses.text = {});
  Object.defineProperty(package$text, 'Texts', {get: Texts_getInstance});
  var package$texture = package$perses.texture || (package$perses.texture = {});
  package$texture.TextureData = TextureData;
  package$texture.Texture = Texture;
  Object.defineProperty(package$texture, 'Textures', {get: Textures_getInstance});
  vertexShaderSource = '\n    attribute vec2 a_position;\n    attribute vec2 a_boundingBox;\n    attribute vec2 a_texCoord;\n    attribute float a_scale;\n    attribute float a_rotation;\n\n    uniform mat4 u_projectionView;\n\n    varying vec2 v_textCoord;\n\n    mat4 scale(float scale) {\n        return mat4(\n            vec4(scale, 0.0,   0.0,   0.0),\n            vec4(0.0,   scale, 0.0,   0.0),\n            vec4(0.0,   0.0,   scale, 0.0),\n            vec4(0.0,   0.0,   0.0,   1.0)\n        );\n    }\n\n    mat4 rotateZ(float angle) {\n        return mat4(\n            vec4(cos(angle),   sin(angle),  0.0,  0.0),\n            vec4(-sin(angle),  cos(angle),  0.0,  0.0),\n            vec4(0.0,          0.0,         1.0,  0.0),\n            vec4(0.0,          0.0,         0.0,  1.0)\n        );\n    }\n\n    void main(void) {\n        v_textCoord = a_texCoord;\n\n        vec4 scaledBox = vec4(a_boundingBox, 1.0, 1.0) * scale(a_scale) * rotateZ(a_rotation);\n\n        gl_Position = u_projectionView * vec4(a_position + scaledBox.xy, 1.0, 1.0);\n    }\n';
  fragmentShaderSource = '\n    precision mediump float;\n\n    uniform sampler2D u_sampler;\n\n    varying vec2 v_textCoord;\n\n    void main(void) {\n        gl_FragColor = texture2D(u_sampler, v_textCoord);\n    }\n';
  return _;
}(typeof kudens === 'undefined' ? {} : kudens, kotlin);

//# sourceMappingURL=kudens.js.map
