'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Keybind = _interopRequireDefault(require("./keybind/Keybind"));

var _Options = _interopRequireDefault(require("./options/Options"));

var _mapping = _interopRequireDefault(require("./mapping/mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "_BUTTONS", _mapping["default"]);

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

    this._options = new _Options["default"](options);

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

      var keybind = new _Keybind["default"](buttons);

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

exports["default"] = ControllerHawk;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDb250cm9sbGVySGF3ayIsIm9wdGlvbnMiLCJtYXBwaW5nIiwieCIsInkiLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJfYm9vdCIsImJ1dHRvbnMiLCJjb25zb2xlIiwid2FybiIsImtleWJpbmQiLCJLZXliaW5kIiwiX2tleWJpbmRzIiwicHVzaCIsInRpbWUiLCJfdXBkYXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiX29uY29ubmVjdCIsImdhbWVwYWQiLCJfb25kaXNjb25uZWN0IiwiX2NvbnRyb2xsZXJzIiwiaW5kZXgiLCJkaXNhYmxlR2FtZUxvb3AiLCJfc2NhbiIsIl91cGRhdGVQcmVzc2VkIiwiX2NoZWNrS2V5YmluZHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYXAiLCJidXR0b24iLCJfcHJlc3NlZCIsInJ1biIsImMiLCJjb250cm9sbGVyIiwiaSIsImxlbmd0aCIsInByZXNzZWQiLCJheGVzIiwiX2xlZnRBbmFsb2dTdGljayIsIl9yaWdodEFuYWxvZ1N0aWNrIiwiZ2FtZXBhZHMiLCJuYXZpZ2F0b3IiLCJnZXRHYW1lcGFkcyIsIl9CVVRUT05TIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFNQTs7O0lBR3FCQSxjOzs7QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7QUFJQSwwQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBOztBQUFBLDBDQW5ETyxFQW1EUDs7QUFBQSxzQ0ExQ0ZDLG1CQTBDRTs7QUFBQSx1Q0FqQ08sRUFpQ1A7O0FBQUEsc0NBeEJELEVBd0JDOztBQUFBLDhDQWZXO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBZVg7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QyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEtleWJpbmQgZnJvbSAnLi9rZXliaW5kL0tleWJpbmQnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcbmltcG9ydCBtYXBwaW5nIGZyb20gJy4vbWFwcGluZy9tYXBwaW5nJztcclxuXHJcbmltcG9ydCBQcmVzc2VkIGZyb20gJy4vaW50ZXJmYWNlcy9QcmVzc2VkJztcclxuaW1wb3J0IENvbnRyb2xsZXJzIGZyb20gJy4vaW50ZXJmYWNlcy9Db250cm9sbGVycyc7XHJcbmltcG9ydCBBbmFsb2dTdGljayBmcm9tICcuL2ludGVyZmFjZXMvQW5hbG9nU3RpY2snO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjb250cm9sbGVyL2dhbWVwYWQgdmVyc2lvbiBvZiBrZXloYXdrLCBtYW5hZ2UgeW91ciBnYW1lJ3Mga2V5YmluZHMgZm9yIHVzZXJzIHVzaW5nIGEgY29udHJvbGxlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJIYXdrIHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gQ29udHJvbGxlcmhhd2suXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXJzIGNvbm5lY3RlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Q29udHJvbGxlcnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29udHJvbGxlcnM6IENvbnRyb2xsZXJzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVycyBhbmQgdGhlaXIgYnV0dG9ucyB0aGF0IGNhbiBiZSB1c2VkIGluIGtleWJpbmRzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfQlVUVE9OUzogT2JqZWN0ID0gbWFwcGluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYWxsIG9mIHRoZSBrZXliaW5kcyB0aGF0IGhhdmUgYmVlbiBjcmVhdGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxLZXliaW5kPn1cclxuICAgKi9cclxuICBwcml2YXRlIF9rZXliaW5kczogQXJyYXk8S2V5YmluZD4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGJ1dHRvbnMgb24gdGhlIGNvbnRyb2xsZXIgY3VycmVudGx5IGJlaW5nIHByZXNzZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ByZXNzZWR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJlc3NlZDogUHJlc3NlZCA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdmFsdWVzIG9mIHRoZSBsZWZ0IGFuYWxvZyBzdGljay5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QW5hbG9nU3RpY2t9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbGVmdEFuYWxvZ1N0aWNrOiBBbmFsb2dTdGljayA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdmFsdWVzIG9mIHRoZSByaWdodCBhbmFsb2cgc3RpY2suXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FuYWxvZ1N0aWNrfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3JpZ2h0QW5hbG9nU3RpY2s6IEFuYWxvZ1N0aWNrID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVHYW1lTG9vcD1mYWxzZV0gSW5kaWNhdGVzIGlmIENvbnRyb2xsZXJoYXdrIHNob3VsZCBub3QgdXNlIGl0cyBpbnRlcm5hbCBnYW1lIGxvb3AgZm9yIHVwZGF0aW5nIHRoZSBjb250cm9sbGVyIHZhbHVlcy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIFxyXG4gICAgdGhpcy5fYm9vdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY29udHJvbGxlciBtYXBwaW5ncy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Y29udHJvbGxlcn1cclxuICAgKi9cclxuICBnZXQgQlVUVE9OUygpIHsgcmV0dXJuIHRoaXMuX0JVVFRPTlM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdmFsdWVzIG9mIHRoZSBsZWZ0IGFuYWxvZyBzdGljay5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7QW5hbG9nU3RpY2t9XHJcbiAgICovXHJcbiAgZ2V0IGxlZnRBbmFsb2dTdGljaygpOiBBbmFsb2dTdGljayB7IHJldHVybiB0aGlzLl9sZWZ0QW5hbG9nU3RpY2s7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdmFsdWVzIG9mIHRoZSByaWdodCBhbmFsb2cgc3RpY2suXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0FuYWxvZ1N0aWNrfVxyXG4gICAqL1xyXG4gIGdldCByaWdodEFuYWxvZ1N0aWNrKCk6IEFuYWxvZ1N0aWNrIHsgcmV0dXJuIHRoaXMuX3JpZ2h0QW5hbG9nU3RpY2s7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBrZXliaW5kIHdpdGggdGhlIHNwZWNpZmllZCBidXR0b25zIG9uIGEgc3VwcG9ydGVkIGNvbnRyb2xsZXIgbGF5b3V0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBidXR0b25zIE9uZSBvciBtb3JlIGJ1dHRvbnMgZnJvbSB0aGUgYENPTlRST0xMRVJgIHByb3BlcnR5IHRvIGF0dGFjaCB0byB0aGlzIGtleWJpbmQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0tleWJpbmR9IFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQga2V5YmluZC5cclxuICAgKi9cclxuICBrZXliaW5kKC4uLmJ1dHRvbnM6IEFycmF5PG51bWJlcj4pOiAoS2V5YmluZCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKCFidXR0b25zKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignQXQgbGVhc3Qgb25lIGJ1dHRvbiBtdXN0IGJlIHByb3ZpZGVkIHRvIGNyZWF0ZSBhIGtleWJpbmQuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXliaW5kOiBLZXliaW5kID0gbmV3IEtleWJpbmQoYnV0dG9ucyk7XHJcblxyXG4gICAgdGhpcy5fa2V5YmluZHMucHVzaChrZXliaW5kKTtcclxuXHJcbiAgICByZXR1cm4ga2V5YmluZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYW55IGtleWJpbmRzIGFyZSBhY3RpdmUgYW5kIHJ1bnMgdGhlbS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaGUgdGltZSBwYXNzZWQgZnJvbSB0aGUgZ2FtZSBjbG9jay5cclxuICAgKi9cclxuICB1cGRhdGUodGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl91cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgZXZlbnQgbGlzdGVuZXJzIGRldGVjdGluZyBhIGdhbWVwYWQgY29ubmVjdGluZyBhbmQgZGlzY29ubmVjdGluZy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Jvb3QoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGNvbm5lY3RlZCcsIChldjogYW55KSA9PiB0aGlzLl9vbmNvbm5lY3QoZXYuZ2FtZXBhZCkpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRkaXNjb25uZWN0ZWQnLCAoZXY6IGFueSkgPT4gdGhpcy5fb25kaXNjb25uZWN0KGV2LmdhbWVwYWQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhlIGNvbm5lY3RlZCBjb250cm9sbGVyIHRvIHRoZSBgX2NvbnRyb2xsZXJzYCBwcm9wZXJ0eSBhbmQgdGhlbiBzdGFydCB0aGUgZ2FtZSBsb29wIHRvIHVwZGF0ZSB0aGUgc3RhdHVzIG9mIFxyXG4gICAqIGJ1dHRvbnMgcHJlc3NlZC90aHVtYnN0aWNrcyBtb3ZlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IFRoZSBgZ2FtZXBhZGNvbm5lY3RlZGAgZXZlbnQgb2JqZWN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uY29ubmVjdChnYW1lcGFkOiBHYW1lcGFkKSB7XHJcbiAgICB0aGlzLl9jb250cm9sbGVyc1tnYW1lcGFkLmluZGV4XSA9IGdhbWVwYWQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmRpc2FibGVHYW1lTG9vcCkgdGhpcy5fdXBkYXRlKDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgZGlzY29ubmVjdGVkIGNvbnRyb2xsZXIgZnJvbSB0aGUgYF9jb250cm9sbGVyc2AgcHJvcGVydHkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiBUaGUgYGdhbWVwYWRkaXNjb25uZWN0ZWRgIGV2ZW50IG9iamVjdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9vbmRpc2Nvbm5lY3QoZ2FtZXBhZDogR2FtZXBhZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NvbnRyb2xsZXJzW2dhbWVwYWQuaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IGdhbWVwYWRzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCBhbmQgcGVyZm9ybXMgY29udHJvbGxlciBhY3Rpb25zLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIFRoZSB0aW1lIHBhc3NlZCBmcm9tIHRoZSBnYW1lIGNsb2NrLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlKHRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2NhbigpO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVByZXNzZWQoKTtcclxuXHJcbiAgICB0aGlzLl9jaGVja0tleWJpbmRzKHRpbWUpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZTogbnVtYmVyKSA9PiB0aGlzLl91cGRhdGUodGltZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGZvciBhY3RpdmUga2V5YmluZHMgYW5kIHJ1bnMgdGhlbS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaGUgdGltZSBwYXNzZWQgZnJvbSB0aGUgZ2FtZSBjbG9jay5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NoZWNrS2V5YmluZHModGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9rZXliaW5kcy5tYXAoKGtleWJpbmQ6IEtleWJpbmQpID0+IHtcclxuXHJcbiAgICAgIGZvciAobGV0IGJ1dHRvbiBvZiBrZXliaW5kLmJ1dHRvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3ByZXNzZWRbYnV0dG9uXSkgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrZXliaW5kLnJ1bih0aW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHdoYXQgYnV0dG9ucyBhcmUgcHJlc3NlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZVByZXNzZWQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5fY29udHJvbGxlcnMpIHtcclxuICAgICAgY29uc3QgY29udHJvbGxlcjogR2FtZXBhZCA9IHRoaXMuX2NvbnRyb2xsZXJzW2NdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNvbnRyb2xsZXIuYnV0dG9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbjogR2FtZXBhZEJ1dHRvbiA9IGNvbnRyb2xsZXIuYnV0dG9uc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvbi5wcmVzc2VkKSB0aGlzLl9wcmVzc2VkW2ldID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIHRoaXMuX3ByZXNzZWRbaV0gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYXhlczogcmVhZG9ubHkgbnVtYmVyW10gPSBjb250cm9sbGVyLmF4ZXM7XHJcblxyXG4gICAgICB0aGlzLl9sZWZ0QW5hbG9nU3RpY2sgPSB7IHg6IGF4ZXNbMF0sIHk6IGF4ZXNbMV0gfTtcclxuICAgICAgdGhpcy5fcmlnaHRBbmFsb2dTdGljayA9IHsgeDogYXhlc1syXSwgeTogYXhlc1szXSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NhbnMgZm9yIG5ldyBjb250cm9sbGVycyBhbmQgaWYgc28gaXQgYWRkcyB0aGVtIHRvIHRoZSBgX2NvbnRyb2xsZXJzYCBwcm9wZXJ0eSBvciB1cGRhdGVzIHRoZSBjdXJyZW50IHJlZmVyZW5jZXMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9zY2FuKCkge1xyXG4gICAgY29uc3QgZ2FtZXBhZHM6IEFycmF5PEdhbWVwYWQgfCBudWxsPiA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG5cclxuICAgIGdhbWVwYWRzLm1hcChnYW1lcGFkID0+IHtcclxuICAgICAgaWYgKCFnYW1lcGFkKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoIShnYW1lcGFkLmluZGV4IGluIHRoaXMuX2NvbnRyb2xsZXJzKSkgdGhpcy5fb25jb25uZWN0KGdhbWVwYWQpO1xyXG4gICAgICBlbHNlIHRoaXMuX2NvbnRyb2xsZXJzW2dhbWVwYWQuaW5kZXhdID0gZ2FtZXBhZDtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==