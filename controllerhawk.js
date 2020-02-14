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

/**
 * Makes it easy for you to map controllers for your game.
 */
var ControllerHawk =
/*#__PURE__*/
function () {
  /**
   * A reference to the controllers connected.
   * 
   * @private
   * 
   * @property {Controllers}
   */
  function ControllerHawk() {
    _classCallCheck(this, ControllerHawk);

    _defineProperty(this, "_controllers", {});

    this._boot();
  }
  /**
   * Maps a contoller button bind to an action.
   */

  /**
   * Adds the necessary event listeners detecting a gamepad connecting and disconnecting.
   * 
   * @private
   */


  _createClass(ControllerHawk, [{
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
      var _this2 = this;

      this._controllers[gamepad.index] = gamepad;
      requestAnimationFrame(function () {
        return _this2._update();
      });
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
     * @private
     */

  }, {
    key: "_update",
    value: function _update() {
      var _this3 = this;

      this._scan();

      requestAnimationFrame(function () {
        return _this3._update();
      });
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
  }]);

  return ControllerHawk;
}();

export default ControllerHawk;
