'use strict';
/**
 * A keybind represents one button or a combination of buttons that perform an action.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Keybind;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rZXliaW5kL0tleWJpbmQudHMiXSwibmFtZXMiOlsiS2V5YmluZCIsImJ1dHRvbnMiLCJfbm9vcCIsIl9idXR0b25zIiwiZm4iLCJfYWN0aW9uIiwidGltZSIsIl9sYXN0VXNlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBV0E7OztBQUdBLG1CQUFZQyxPQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUEscUNBaEJSLEtBQUtDLEtBZ0JHOztBQUFBLHVDQUxSLENBS1E7O0FBQ2xDLFNBQUtDLFFBQUwsR0FBZ0JGLE9BQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQWNBOzs7Ozs7OzJCQU9PRyxFLEVBQXVCO0FBQzVCLFdBQUtDLE9BQUwsR0FBZUQsRUFBZjtBQUVBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O3dCQUtJRSxJLEVBQWM7QUFDaEIsV0FBS0QsT0FBTDs7QUFFQSxXQUFLRSxTQUFMLEdBQWlCRCxJQUFqQjtBQUNEO0FBRUQ7Ozs7Ozs7OzRCQUtnQixDQUFHOzs7d0JBdENVO0FBQUUsYUFBTyxLQUFLSCxRQUFaO0FBQXVCO0FBRXREOzs7Ozs7Ozt3QkFLdUI7QUFBRSxhQUFPLEtBQUtJLFNBQVo7QUFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBBIGtleWJpbmQgcmVwcmVzZW50cyBvbmUgYnV0dG9uIG9yIGEgY29tYmluYXRpb24gb2YgYnV0dG9ucyB0aGF0IHBlcmZvcm0gYW4gYWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5YmluZCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJ1dHRvbnMgdGhhdCBhcmUgYXNzaWduZWQgdG8gdGhpcyBrZXliaW5kLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtLZXliaW5kT2JqZWN0fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2J1dHRvbnM6IEFycmF5PG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjYWxsYmFjayBtZXRob2QgdG8gcnVuIHdoZW4gdGhpcyBrZXliaW5kIGlzIHVzZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IHRoaXMubm9vcFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FjdGlvbjogRnVuY3Rpb24gPSB0aGlzLl9ub29wO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHRpbWUgdGhpcyBrZXliaW5kIHdhcyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2xhc3RVc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0tleWJpbmRPYmplY3R9IGJ1dHRvbnMgVGhlIGJ1dHRvbnMgdG8gYmluZCB0byB0aGlzIGtleWJpbmQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoYnV0dG9uczogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgdGhpcy5fYnV0dG9ucyA9IGJ1dHRvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBidXR0b25zIGZvciB0aGlzIGtleWJpbmQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0FycmF5PG51bWJlcj59XHJcbiAgICovXHJcbiAgZ2V0IGJ1dHRvbnMoKTogQXJyYXk8bnVtYmVyPiB7IHJldHVybiB0aGlzLl9idXR0b25zOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGxhc3QgdGltZSB0aGF0IHRoaXMga2V5YmluZCB3YXMgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldCBsYXN0VXNlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbGFzdFVzZWQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhpcyBrZXliaW5kIGlzIHVzZWQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoaXMga2V5YmluZCBpcyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtLZXliaW5kfSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIGFjdGlvbihmbjogRnVuY3Rpb24pOiBLZXliaW5kIHtcclxuICAgIHRoaXMuX2FjdGlvbiA9IGZuO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUnVucyB0aGUgZnVuY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5YmluZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaGUgdGltZXN0YW1wIHBhc3NlZCBmcm9tIHRoZSBnYW1lIGNsb2NrLlxyXG4gICAqL1xyXG4gIHJ1bih0aW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2FjdGlvbigpO1xyXG5cclxuICAgIHRoaXMuX2xhc3RVc2VkID0gdGltZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGVtcHR5IGZ1bmN0aW9uIHRvIHVzZSBhcyBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBhY3Rpb24gb2YgdGhpcyBrZXliaW5kLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbm9vcCgpIHsgfVxyXG59Il19