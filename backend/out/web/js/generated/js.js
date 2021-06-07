(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-io', 'kudens'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-io'), require('kudens'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'js'.");
    }if (typeof this['kotlinx-io'] === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kotlinx-io' was not found. Please, check whether 'kotlinx-io' is loaded prior to 'js'.");
    }if (typeof kudens === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'js'.");
    }root.js = factory(typeof js === 'undefined' ? {} : js, kotlin, this['kotlinx-io'], kudens);
  }
}(this, function (_, Kotlin, $module$kotlinx_io, $module$kudens) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var BytePacketBuilder = $module$kotlinx_io.kotlinx.io.core.BytePacketBuilder_za3lpa$;
  var readBytes = $module$kotlinx_io.kotlinx.io.core.readBytes_3lionn$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var ByteReadPacket = $module$kotlinx_io.kotlinx.io.core.ByteReadPacket_1qge3v$;
  var game = $module$kudens.games.perses.game;
  var DrawMode = $module$kudens.games.perses.game.DrawMode;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var text = $module$kudens.games.perses.text;
  var toByteArray = Kotlin.kotlin.collections.toByteArray_vn5r1x$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var Screen = $module$kudens.games.perses.game.Screen;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  Form.prototype = Object.create(Enum.prototype);
  Form.prototype.constructor = Form;
  Filling.prototype = Object.create(Enum.prototype);
  Filling.prototype.constructor = Filling;
  Color.prototype = Object.create(Enum.prototype);
  Color.prototype.constructor = Color;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  function Form(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Form_initFields() {
    Form_initFields = function () {
    };
    Form$OVAL_instance = new Form('OVAL', 0);
    Form$RECTANGLE_instance = new Form('RECTANGLE', 1);
    Form$WAVE_instance = new Form('WAVE', 2);
    Form$Companion_getInstance();
  }
  var Form$OVAL_instance;
  function Form$OVAL_getInstance() {
    Form_initFields();
    return Form$OVAL_instance;
  }
  var Form$RECTANGLE_instance;
  function Form$RECTANGLE_getInstance() {
    Form_initFields();
    return Form$RECTANGLE_instance;
  }
  var Form$WAVE_instance;
  function Form$WAVE_getInstance() {
    Form_initFields();
    return Form$WAVE_instance;
  }
  function Form$Companion() {
    Form$Companion_instance = this;
    var $receiver = Form$values();
    var keySelector = getPropertyCallableRef('ordinal', 1, function ($receiver) {
      return $receiver.ordinal;
    });
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(keySelector(element), element);
    }
    this.map_0 = destination;
  }
  Form$Companion.prototype.fromInt_za3lpa$ = function (type) {
    return ensureNotNull(this.map_0.get_11rb$(type));
  };
  Form$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Form$Companion_instance = null;
  function Form$Companion_getInstance() {
    Form_initFields();
    if (Form$Companion_instance === null) {
      new Form$Companion();
    }return Form$Companion_instance;
  }
  Form.$metadata$ = {kind: Kind_CLASS, simpleName: 'Form', interfaces: [Enum]};
  function Form$values() {
    return [Form$OVAL_getInstance(), Form$RECTANGLE_getInstance(), Form$WAVE_getInstance()];
  }
  Form.values = Form$values;
  function Form$valueOf(name) {
    switch (name) {
      case 'OVAL':
        return Form$OVAL_getInstance();
      case 'RECTANGLE':
        return Form$RECTANGLE_getInstance();
      case 'WAVE':
        return Form$WAVE_getInstance();
      default:throwISE('No enum constant com.lfmteixeira.models.Form.' + name);
    }
  }
  Form.valueOf_61zpoe$ = Form$valueOf;
  function Filling(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Filling_initFields() {
    Filling_initFields = function () {
    };
    Filling$EMPTY_instance = new Filling('EMPTY', 0);
    Filling$FILLED_instance = new Filling('FILLED', 1);
    Filling$HALF_FILLED_instance = new Filling('HALF_FILLED', 2);
    Filling$Companion_getInstance();
  }
  var Filling$EMPTY_instance;
  function Filling$EMPTY_getInstance() {
    Filling_initFields();
    return Filling$EMPTY_instance;
  }
  var Filling$FILLED_instance;
  function Filling$FILLED_getInstance() {
    Filling_initFields();
    return Filling$FILLED_instance;
  }
  var Filling$HALF_FILLED_instance;
  function Filling$HALF_FILLED_getInstance() {
    Filling_initFields();
    return Filling$HALF_FILLED_instance;
  }
  function Filling$Companion() {
    Filling$Companion_instance = this;
    var $receiver = Filling$values();
    var keySelector = getPropertyCallableRef('ordinal', 1, function ($receiver) {
      return $receiver.ordinal;
    });
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(keySelector(element), element);
    }
    this.map_0 = destination;
  }
  Filling$Companion.prototype.fromInt_za3lpa$ = function (type) {
    return ensureNotNull(this.map_0.get_11rb$(type));
  };
  Filling$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Filling$Companion_instance = null;
  function Filling$Companion_getInstance() {
    Filling_initFields();
    if (Filling$Companion_instance === null) {
      new Filling$Companion();
    }return Filling$Companion_instance;
  }
  Filling.$metadata$ = {kind: Kind_CLASS, simpleName: 'Filling', interfaces: [Enum]};
  function Filling$values() {
    return [Filling$EMPTY_getInstance(), Filling$FILLED_getInstance(), Filling$HALF_FILLED_getInstance()];
  }
  Filling.values = Filling$values;
  function Filling$valueOf(name) {
    switch (name) {
      case 'EMPTY':
        return Filling$EMPTY_getInstance();
      case 'FILLED':
        return Filling$FILLED_getInstance();
      case 'HALF_FILLED':
        return Filling$HALF_FILLED_getInstance();
      default:throwISE('No enum constant com.lfmteixeira.models.Filling.' + name);
    }
  }
  Filling.valueOf_61zpoe$ = Filling$valueOf;
  function Color(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Color_initFields() {
    Color_initFields = function () {
    };
    Color$RED_instance = new Color('RED', 0);
    Color$GREEN_instance = new Color('GREEN', 1);
    Color$BLUE_instance = new Color('BLUE', 2);
    Color$Companion_getInstance();
  }
  var Color$RED_instance;
  function Color$RED_getInstance() {
    Color_initFields();
    return Color$RED_instance;
  }
  var Color$GREEN_instance;
  function Color$GREEN_getInstance() {
    Color_initFields();
    return Color$GREEN_instance;
  }
  var Color$BLUE_instance;
  function Color$BLUE_getInstance() {
    Color_initFields();
    return Color$BLUE_instance;
  }
  function Color$Companion() {
    Color$Companion_instance = this;
    var $receiver = Color$values();
    var keySelector = getPropertyCallableRef('ordinal', 1, function ($receiver) {
      return $receiver.ordinal;
    });
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(keySelector(element), element);
    }
    this.map_0 = destination;
  }
  Color$Companion.prototype.fromInt_za3lpa$ = function (type) {
    return ensureNotNull(this.map_0.get_11rb$(type));
  };
  Color$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    Color_initFields();
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }return Color$Companion_instance;
  }
  Color.$metadata$ = {kind: Kind_CLASS, simpleName: 'Color', interfaces: [Enum]};
  function Color$values() {
    return [Color$RED_getInstance(), Color$GREEN_getInstance(), Color$BLUE_getInstance()];
  }
  Color.values = Color$values;
  function Color$valueOf(name) {
    switch (name) {
      case 'RED':
        return Color$RED_getInstance();
      case 'GREEN':
        return Color$GREEN_getInstance();
      case 'BLUE':
        return Color$BLUE_getInstance();
      default:throwISE('No enum constant com.lfmteixeira.models.Color.' + name);
    }
  }
  Color.valueOf_61zpoe$ = Color$valueOf;
  function Card(number, form, filling, color) {
    this.number = number;
    this.form = form;
    this.filling = filling;
    this.color = color;
  }
  Card.prototype.buildBytes_n1q6a5$ = function (builder) {
    builder.writeInt_za3lpa$(this.number);
    builder.writeInt_za3lpa$(this.form.ordinal);
    builder.writeInt_za3lpa$(this.filling.ordinal);
    builder.writeInt_za3lpa$(this.color.ordinal);
  };
  Card.prototype.toByteArray = function () {
    var builder = BytePacketBuilder();
    this.buildBytes_n1q6a5$(builder);
    return readBytes(builder.build());
  };
  Card.prototype.toString = function () {
    return this.number.toString() + ', ' + this.form + ', ' + this.color + ', ' + this.filling;
  };
  Card.$metadata$ = {kind: Kind_CLASS, simpleName: 'Card', interfaces: []};
  function Card_init_0(reader, $this) {
    $this = $this || Object.create(Card.prototype);
    Card.call($this, reader.readInt(), Form$Companion_getInstance().fromInt_za3lpa$(reader.readInt()), Filling$Companion_getInstance().fromInt_za3lpa$(reader.readInt()), Color$Companion_getInstance().fromInt_za3lpa$(reader.readInt()));
    return $this;
  }
  Card.prototype.component1 = function () {
    return this.number;
  };
  Card.prototype.component2 = function () {
    return this.form;
  };
  Card.prototype.component3 = function () {
    return this.filling;
  };
  Card.prototype.component4 = function () {
    return this.color;
  };
  Card.prototype.copy_2vyss3$ = function (number, form, filling, color) {
    return new Card(number === void 0 ? this.number : number, form === void 0 ? this.form : form, filling === void 0 ? this.filling : filling, color === void 0 ? this.color : color);
  };
  Card.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.form) | 0;
    result = result * 31 + Kotlin.hashCode(this.filling) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Card.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.number, other.number) && Kotlin.equals(this.form, other.form) && Kotlin.equals(this.filling, other.filling) && Kotlin.equals(this.color, other.color)))));
  };
  function toCards(byteArray) {
    var cards = ArrayList_init();
    var reader = ByteReadPacket(byteArray, 0, byteArray.length, ByteReadPacket$lambda);
    while (reader.canRead()) {
      cards.add_11rb$(Card_init_0(reader));
    }
    return cards;
  }
  function main$lambda$lambda(closure$gameScreen) {
    return function (bytes) {
      closure$gameScreen.cards = toCards(bytes);
      return Unit;
    };
  }
  function main$lambda(closure$gameScreen) {
    return function (messageEvent) {
      readBytes_0(messageEvent, main$lambda$lambda(closure$gameScreen));
      return Unit;
    };
  }
  function main$lambda_0(it) {
    if (Kotlin.isType(it, ErrorEvent)) {
      var data = it.message;
      println('ERROR: ' + data);
    } else {
      println('UNKNOWN ERROR: ' + it.type);
    }
    return Unit;
  }
  function main() {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#182') : null;
    game.Game.view.setToWidth_mx4ult$(1200.0);
    game.Game.view.drawMode = DrawMode.LINEAR;
    game.Game.view.minAspectRatio = 1200.0 / 1200.0;
    game.Game.view.maxAspectRatio = 1200.0 / 1200.0;
    game.Game.setClearColor_7b5o5w$(0.0, 0.0, 0.0, 1.0);
    var gameScreen = new GameScreen();
    gameScreen.webSocket.onmessage = main$lambda(gameScreen);
    gameScreen.webSocket.onerror = main$lambda_0;
    game.Game.start_lbnb05$(gameScreen);
  }
  function GameScreen() {
    Screen.call(this);
    var tmp$;
    this.webSocket = new WebSocket('ws://' + ((tmp$ = document.location) != null ? tmp$.host : null));
    this.cards = emptyList();
    this.secondsSinceLastSend_0 = 0.0;
  }
  GameScreen.prototype.render = function () {
    var context = game.Game.html.canvas2d;
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.cards.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var i = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      text.Texts.drawText_k35s1u$(10.0, 10 + i * 100.0, item.toString(), 'bold 20pt Arial', 'gray');
    }
  };
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
    this.secondsSinceLastSend_0 += delta;
    var secondsBetweenSends = 0.03;
    if (this.secondsSinceLastSend_0 > secondsBetweenSends) {
      this.secondsSinceLastSend_0 %= secondsBetweenSends;
      var openstate = 1;
      if (this.webSocket.readyState === openstate) {
        var byteArray = [];
        this.webSocket.send(new Int8Array(toTypedArray(toByteArray(byteArray))));
      }}};
  GameScreen.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameScreen', interfaces: [Screen]};
  function readBytes$lambda(closure$fileReader, closure$onReadDone) {
    return function (it) {
      var tmp$;
      var arrayBuffer = Kotlin.isType(tmp$ = closure$fileReader.result, ArrayBuffer) ? tmp$ : throwCCE();
      var uint8Array = new Uint8Array(arrayBuffer);
      var array = new Int8Array(uint8Array.byteLength);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = uint8Array[i];
      }
      var byteArray = array;
      closure$onReadDone(byteArray);
      return Unit;
    };
  }
  function readBytes_0($receiver, onReadDone) {
    var tmp$;
    var data = Kotlin.isType(tmp$ = $receiver.data, Blob) ? tmp$ : throwCCE();
    var fileReader = new FileReader();
    fileReader.addEventListener('loadend', readBytes$lambda(fileReader, onReadDone));
    fileReader.readAsArrayBuffer(data);
  }
  Object.defineProperty(Form, 'OVAL', {get: Form$OVAL_getInstance});
  Object.defineProperty(Form, 'RECTANGLE', {get: Form$RECTANGLE_getInstance});
  Object.defineProperty(Form, 'WAVE', {get: Form$WAVE_getInstance});
  Object.defineProperty(Form, 'Companion', {get: Form$Companion_getInstance});
  var package$com = _.com || (_.com = {});
  var package$lfmteixeira = package$com.lfmteixeira || (package$com.lfmteixeira = {});
  var package$models = package$lfmteixeira.models || (package$lfmteixeira.models = {});
  package$models.Form = Form;
  Object.defineProperty(Filling, 'EMPTY', {get: Filling$EMPTY_getInstance});
  Object.defineProperty(Filling, 'FILLED', {get: Filling$FILLED_getInstance});
  Object.defineProperty(Filling, 'HALF_FILLED', {get: Filling$HALF_FILLED_getInstance});
  Object.defineProperty(Filling, 'Companion', {get: Filling$Companion_getInstance});
  package$models.Filling = Filling;
  Object.defineProperty(Color, 'RED', {get: Color$RED_getInstance});
  Object.defineProperty(Color, 'GREEN', {get: Color$GREEN_getInstance});
  Object.defineProperty(Color, 'BLUE', {get: Color$BLUE_getInstance});
  Object.defineProperty(Color, 'Companion', {get: Color$Companion_getInstance});
  package$models.Color = Color;
  package$models.Card_init_8awntw$ = Card_init_0;
  $$importsForInline$$['kotlinx-io'] = $module$kotlinx_io;
  package$models.Card = Card;
  package$models.toCards_fqrh44$ = toCards;
  var package$client = package$lfmteixeira.client || (package$lfmteixeira.client = {});
  package$client.main = main;
  package$client.GameScreen = GameScreen;
  main();
  return _;
}));

//# sourceMappingURL=js.js.map
