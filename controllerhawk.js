function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Keybind =
/*#__PURE__*/
function () {
  /**
   * The buttons that are assigned to this keybind.
   * 
   * @private
   * 
   * @property {KeybindObject}
   */

  /**
   * The callback method to run when this keybind is used.
   * 
   * @private
   * 
   * @property {Function}
   * 
   * @default this.noop
   */

  /**
   * The timestamp of the last time this keybind was used.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 0
   */

  /**
   * @param {KeybindObject} buttons The buttons to bind to this keybind.
   */
  function Keybind(buttons) {
    _classCallCheck(this, Keybind);

    _defineProperty(this, "_buttons", void 0);

    _defineProperty(this, "_action", this._noop);

    _defineProperty(this, "_lastUsed", 0);

    this._buttons = buttons;
  }
  /**
   * Returns the buttons for this keybind.
   * 
   * @returns {Array<number>}
   */


  _createClass(Keybind, [{
    key: "action",

    /**
     * Sets the function to run when this keybind is used.
     * 
     * @param {Function} fn The function to run when this keybind is used.
     * 
     * @returns {Keybind} Returns this for chaining.
     */
    value: function action(fn) {
      this._action = fn;
      return this;
    }
    /**
     * Runs the function associated with this keybind.
     * 
     * @param {number} time The timestamp passed from the game clock.
     */

  }, {
    key: "run",
    value: function run(time) {
      this._action();

      this._lastUsed = time;
    }
    /**
     * An empty function to use as a default value for the action of this keybind.
     * 
     * @private
     */

  }, {
    key: "_noop",
    value: function _noop() {}
  }, {
    key: "buttons",
    get: function get() {
      return this._buttons;
    }
    /**
     * Returns the last time that this keybind was used.
     * 
     * @returns {number}
     */

  }, {
    key: "lastUsed",
    get: function get() {
      return this._lastUsed;
    }
  }]);

  return Keybind;
}();

var Options =
/**
 * Indicates if Controllerhawk should not use its internal game loop for updating the controller values.
 * 
 * @default true
 */

/**
 * @param {Object} options The initialization options passed to Controllerhawk.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "disableGameLoop", false);

  Object.assign(this, options);
};

/**
 * Maps the standard gamepad to a PS4 controller.
 * 
 * https://www.w3.org/TR/gamepad/#remapping
 */

var ps4 = {
  X: 0,
  CROSS: 0,
  CIRCLE: 1,
  SQUARE: 2,
  TRIANGLE: 3,
  LEFT_BUMPER: 4,
  RIGHT_BUMPER: 5,
  LEFT_TRIGGER: 6,
  RIGHT_TRIGGER: 7,
  SELECT: 8,
  START: 9,
  LEFT_ANALOG: 10,
  RIGHT_ANALOG: 11,
  DPAD_UP: 12,
  DPAD_BOTTOM: 13,
  DPAD_LEFT: 14,
  DPAD_RIGHT: 15,
  MIDDLE: 16
};

/**
 * Maps the standard gamepad to a Xbox One controller.
 * 
 * https://www.w3.org/TR/gamepad/#remapping
 */

var xbox = {
  A: 0,
  B: 1,
  X: 2,
  Y: 3,
  LEFT_BUMPER: 4,
  RIGHT_BUMPER: 5,
  LEFT_TRIGGER: 6,
  RIGHT_TRIGGER: 7,
  SELECT: 8,
  START: 9,
  LEFT_ANALOG: 10,
  RIGHT_ANALOG: 11,
  DPAD_UP: 12,
  DPAD_BOTTOM: 13,
  DPAD_LEFT: 14,
  DPAD_RIGHT: 15,
  MIDDLE: 16
};

/**
 * Maps the standard gamepad to a generic controller.
 * 
 * https://www.w3.org/TR/gamepad/#remapping
 */

var generic = {
  QUAD_BUTTON_BOTTOM: 0,
  QUAD_BUTTON_RIGHT: 1,
  QUAD_BUTTON_LEFT: 2,
  QUAD_BUTTON_TOP: 3,
  LEFT_BUMPER: 4,
  RIGHT_BUMPER: 5,
  LEFT_TRIGGER: 6,
  RIGHT_TRIGGER: 7,
  SELECT: 8,
  START: 9,
  LEFT_ANALOG: 10,
  RIGHT_ANALOG: 11,
  DPAD_UP: 12,
  DPAD_BOTTOM: 13,
  DPAD_LEFT: 14,
  DPAD_RIGHT: 15,
  MIDDLE: 16
};

/**
 * Imports all of the individual mappings and provides a way to access any supported controller layout.
 */

var mapping = {
  /**
   * The layout for the ps4 controller.
   */
  PS4: ps4,

  /**
   * The layout for the general xbox/xbox360 controller.
   */
  XBOX: xbox,

  /**
   * The layout for a generic controller.
   */
  GENERIC: generic
};

/**
 * The controller/gamepad version of keyhawk, manage your game's keybinds for users using a controller.
 */
var ControllerHawk =
/*#__PURE__*/
function () {
  /**
   * A reference to the options passed to Controllerhawk.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the controllers connected.
   * 
   * @private
   * 
   * @property {Controllers}
   */

  /**
   * A reference to the controllers and their buttons that can be used in keybinds.
   * 
   * @private
   * 
   * @property {Object}
   */

  /**
   * A reference to all of the keybinds that have been created.
   * 
   * @private
   * 
   * @property {Array<Keybind>}
   */

  /**
   * A reference to the buttons on the controller currently being pressed.
   * 
   * @private
   * 
   * @property {Pressed}
   */

  /**
   * The values of the left analog stick.
   * 
   * @private
   * 
   * @property {AnalogStick}
   */

  /**
   * The values of the right analog stick.
   * 
   * @private
   * 
   * @property {AnalogStick}
   */

  /**
   * @param {Object} [options]
   * @param {boolean} [options.disableGameLoop=false] Indicates if Controllerhawk should not use its internal game loop for updating the controller values.
   */
  function ControllerHawk(options) {
    _classCallCheck(this, ControllerHawk);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_controllers", {});

    _defineProperty(this, "_BUTTONS", mapping);

    _defineProperty(this, "_keybinds", []);

    _defineProperty(this, "_pressed", {});

    _defineProperty(this, "_leftAnalogStick", {
      x: 0,
      y: 0
    });

    _defineProperty(this, "_rightAnalogStick", {
      x: 0,
      y: 0
    });

    this._options = new Options(options);

    this._boot();
  }
  /**
   * Returns the controller mappings.
   * 
   * @returns {controller}
   */


  _createClass(ControllerHawk, [{
    key: "keybind",

    /**
     * Creates a new keybind with the specified buttons on a supported controller layout.
     * 
     * @param {...string} buttons One or more buttons from the `CONTROLLER` property to attach to this keybind.
     * 
     * @returns {Keybind} Returns the newly created keybind.
     */
    value: function keybind() {
      for (var _len = arguments.length, buttons = new Array(_len), _key = 0; _key < _len; _key++) {
        buttons[_key] = arguments[_key];
      }

      if (!buttons) {
        console.warn('At least one button must be provided to create a keybind.');
        return;
      }

      var keybind = new Keybind(buttons);

      this._keybinds.push(keybind);

      return keybind;
    }
    /**
     * Checks to see if any keybinds are active and runs them.
     * 
     * @param {number} time The time passed from the game clock.
     */

  }, {
    key: "update",
    value: function update(time) {
      this._update(time);
    }
    /**
     * Adds the necessary event listeners detecting a gamepad connecting and disconnecting.
     * 
     * @private
     */

  }, {
    key: "_boot",
    value: function _boot() {
      var _this = this;

      window.addEventListener('gamepadconnected', function (ev) {
        return _this._onconnect(ev.gamepad);
      });
      window.addEventListener('gamepaddisconnected', function (ev) {
        return _this._ondisconnect(ev.gamepad);
      });
    }
    /**
     * Adds the connected controller to the `_controllers` property and then start the game loop to update the status of 
     * buttons pressed/thumbsticks moved.
     * 
     * @private
     * 
     * @param {Event} ev The `gamepadconnected` event object.
     */

  }, {
    key: "_onconnect",
    value: function _onconnect(gamepad) {
      this._controllers[gamepad.index] = gamepad;
      if (!this._options.disableGameLoop) this._update(0);
    }
    /**
     * Removes the disconnected controller from the `_controllers` property.
     * 
     * @private
     * 
     * @param {Event} ev The `gamepaddisconnected` event object.
     */

  }, {
    key: "_ondisconnect",
    value: function _ondisconnect(gamepad) {
      delete this._controllers[gamepad.index];
    }
    /**
     * Checks to see if there are any gamepads that need to be added and performs controller actions.
     * 
     * @param {number} time The time passed from the game clock.
     * 
     * @private
     */

  }, {
    key: "_update",
    value: function _update(time) {
      var _this2 = this;

      this._scan();

      this._updatePressed();

      this._checkKeybinds(time);

      requestAnimationFrame(function (time) {
        return _this2._update(time);
      });
    }
    /**
     * Checks for active keybinds and runs them.
     * 
     * @param {number} time The time passed from the game clock.
     * 
     * @private
     */

  }, {
    key: "_checkKeybinds",
    value: function _checkKeybinds(time) {
      var _this3 = this;

      this._keybinds.map(function (keybind) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keybind.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var button = _step.value;
            if (!_this3._pressed[button]) return;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        keybind.run(time);
      });
    }
    /**
     * Updates the status of what buttons are pressed.
     * 
     * @private
     */

  }, {
    key: "_updatePressed",
    value: function _updatePressed() {
      for (var c in this._controllers) {
        var controller = this._controllers[c];

        for (var i = 0; i < controller.buttons.length; ++i) {
          var button = controller.buttons[i];
          if (button.pressed) this._pressed[i] = true;else this._pressed[i] = false;
        }

        var axes = controller.axes;
        this._leftAnalogStick = {
          x: axes[0],
          y: axes[1]
        };
        this._rightAnalogStick = {
          x: axes[2],
          y: axes[3]
        };
      }
    }
    /**
     * Scans for new controllers and if so it adds them to the `_controllers` property or updates the current references.
     * 
     * @private
     */

  }, {
    key: "_scan",
    value: function _scan() {
      var _this4 = this;

      var gamepads = navigator.getGamepads();
      gamepads.map(function (gamepad) {
        if (!gamepad) return;
        if (!(gamepad.index in _this4._controllers)) _this4._onconnect(gamepad);else _this4._controllers[gamepad.index] = gamepad;
      });
    }
  }, {
    key: "BUTTONS",
    get: function get() {
      return this._BUTTONS;
    }
    /**
     * Returns the values of the left analog stick.
     * 
     * @returns {AnalogStick}
     */

  }, {
    key: "leftAnalogStick",
    get: function get() {
      return this._leftAnalogStick;
    }
    /**
     * Returns the values of the right analog stick.
     * 
     * @returns {AnalogStick}
     */

  }, {
    key: "rightAnalogStick",
    get: function get() {
      return this._rightAnalogStick;
    }
  }]);

  return ControllerHawk;
}();

export default ControllerHawk;
