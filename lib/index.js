'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = ControllerHawk;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDb250cm9sbGVySGF3ayIsIl9ib290Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiX29uY29ubmVjdCIsImdhbWVwYWQiLCJfb25kaXNjb25uZWN0IiwiX2NvbnRyb2xsZXJzIiwiaW5kZXgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdXBkYXRlIiwiX3NjYW4iLCJnYW1lcGFkcyIsIm5hdmlnYXRvciIsImdldEdhbWVwYWRzIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7OztJQUdxQkEsYzs7O0FBQ25COzs7Ozs7O0FBU0EsNEJBQWM7QUFBQTs7QUFBQSwwQ0FGc0IsRUFFdEI7O0FBQ1osU0FBS0MsS0FBTDtBQUNEO0FBRUQ7Ozs7QUFJQTs7Ozs7Ozs7OzRCQUtnQjtBQUFBOztBQUNkQyxNQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFDQyxFQUFEO0FBQUEsZUFBYSxLQUFJLENBQUNDLFVBQUwsQ0FBZ0JELEVBQUUsQ0FBQ0UsT0FBbkIsQ0FBYjtBQUFBLE9BQTVDO0FBQ0FKLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IscUJBQXhCLEVBQStDLFVBQUNDLEVBQUQ7QUFBQSxlQUFhLEtBQUksQ0FBQ0csYUFBTCxDQUFtQkgsRUFBRSxDQUFDRSxPQUF0QixDQUFiO0FBQUEsT0FBL0M7QUFDRDtBQUVEOzs7Ozs7Ozs7OzsrQkFRbUJBLE8sRUFBa0I7QUFBQTs7QUFDbkMsV0FBS0UsWUFBTCxDQUFrQkYsT0FBTyxDQUFDRyxLQUExQixJQUFtQ0gsT0FBbkM7QUFFQUksTUFBQUEscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsT0FBTCxFQUFOO0FBQUEsT0FBRCxDQUFyQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7a0NBT3NCTCxPLEVBQWtCO0FBQ3RDLGFBQU8sS0FBS0UsWUFBTCxDQUFrQkYsT0FBTyxDQUFDRyxLQUExQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OEJBS2tCO0FBQUE7O0FBQ2hCLFdBQUtHLEtBQUw7O0FBRUFGLE1BQUFBLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE9BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBckI7QUFDRDtBQUVEOzs7Ozs7Ozs0QkFLZ0I7QUFBQTs7QUFDZCxVQUFNRSxRQUE2QixHQUFHQyxTQUFTLENBQUNDLFdBQVYsRUFBdEM7QUFFQUYsTUFBQUEsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQVYsT0FBTyxFQUFJO0FBQ3RCLFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBRWQsWUFBSSxFQUFFQSxPQUFPLENBQUNHLEtBQVIsSUFBaUIsTUFBSSxDQUFDRCxZQUF4QixDQUFKLEVBQTJDLE1BQUksQ0FBQ0gsVUFBTCxDQUFnQkMsT0FBaEIsRUFBM0MsS0FDSyxNQUFJLENBQUNFLFlBQUwsQ0FBa0JGLE9BQU8sQ0FBQ0csS0FBMUIsSUFBbUNILE9BQW5DO0FBQ04sT0FMRDtBQU1EIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlcnMgZnJvbSAnLi9pbnRlcmZhY2VzL0NvbnRyb2xsZXJzJztcclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBpdCBlYXN5IGZvciB5b3UgdG8gbWFwIGNvbnRyb2xsZXJzIGZvciB5b3VyIGdhbWUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVySGF3ayB7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXJzIGNvbm5lY3RlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Q29udHJvbGxlcnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29udHJvbGxlcnM6IENvbnRyb2xsZXJzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fYm9vdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFwcyBhIGNvbnRvbGxlciBidXR0b24gYmluZCB0byBhbiBhY3Rpb24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBldmVudCBsaXN0ZW5lcnMgZGV0ZWN0aW5nIGEgZ2FtZXBhZCBjb25uZWN0aW5nIGFuZCBkaXNjb25uZWN0aW5nLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfYm9vdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkY29ubmVjdGVkJywgKGV2OiBhbnkpID0+IHRoaXMuX29uY29ubmVjdChldi5nYW1lcGFkKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGRpc2Nvbm5lY3RlZCcsIChldjogYW55KSA9PiB0aGlzLl9vbmRpc2Nvbm5lY3QoZXYuZ2FtZXBhZCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGUgY29ubmVjdGVkIGNvbnRyb2xsZXIgdG8gdGhlIGBfY29udHJvbGxlcnNgIHByb3BlcnR5IGFuZCB0aGVuIHN0YXJ0IHRoZSBnYW1lIGxvb3AgdG8gdXBkYXRlIHRoZSBzdGF0dXMgb2YgXHJcbiAgICogYnV0dG9ucyBwcmVzc2VkL3RodW1ic3RpY2tzIG1vdmVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgVGhlIGBnYW1lcGFkY29ubmVjdGVkYCBldmVudCBvYmplY3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25jb25uZWN0KGdhbWVwYWQ6IEdhbWVwYWQpIHtcclxuICAgIHRoaXMuX2NvbnRyb2xsZXJzW2dhbWVwYWQuaW5kZXhdID0gZ2FtZXBhZDtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fdXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgZGlzY29ubmVjdGVkIGNvbnRyb2xsZXIgZnJvbSB0aGUgYF9jb250cm9sbGVyc2AgcHJvcGVydHkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiBUaGUgYGdhbWVwYWRkaXNjb25uZWN0ZWRgIGV2ZW50IG9iamVjdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9vbmRpc2Nvbm5lY3QoZ2FtZXBhZDogR2FtZXBhZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NvbnRyb2xsZXJzW2dhbWVwYWQuaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IGdhbWVwYWRzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCBhbmQgcGVyZm9ybXMgY29udHJvbGxlciBhY3Rpb25zLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xyXG4gICAgdGhpcy5fc2NhbigpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl91cGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FucyBmb3IgbmV3IGNvbnRyb2xsZXJzIGFuZCBpZiBzbyBpdCBhZGRzIHRoZW0gdG8gdGhlIGBfY29udHJvbGxlcnNgIHByb3BlcnR5IG9yIHVwZGF0ZXMgdGhlIGN1cnJlbnQgcmVmZXJlbmNlcy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NjYW4oKSB7XHJcbiAgICBjb25zdCBnYW1lcGFkczogQXJyYXk8R2FtZXBhZHxudWxsPiA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG5cclxuICAgIGdhbWVwYWRzLm1hcChnYW1lcGFkID0+IHtcclxuICAgICAgaWYgKCFnYW1lcGFkKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoIShnYW1lcGFkLmluZGV4IGluIHRoaXMuX2NvbnRyb2xsZXJzKSkgdGhpcy5fb25jb25uZWN0KGdhbWVwYWQpO1xyXG4gICAgICBlbHNlIHRoaXMuX2NvbnRyb2xsZXJzW2dhbWVwYWQuaW5kZXhdID0gZ2FtZXBhZDtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==