'use strict';
/**
 * TODO:
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Controller =
/**
 * The id of the gamepad.
 * 
 * @private
 * 
 * @property {string}
 */

/**
 * Indicates what order this controller was plugged in.
 * 
 * @private
 * 
 * @property {number}
 */

/**
 * Indicates whether the browser has remapped the controls to the standard layout.
 * 
 * @private
 * 
 * @property {string}
 */

/**
 * Indicates whether this gamepad is still connected or not.
 * 
 * @private
 * 
 * @property {boolean}
 */

/**
 * The buttons on this gamepad.
 * 
 * @private
 * 
 * @property {Array<*>}
 */

/**
 * The analog sticks on this gamepad.
 * 
 * @private
 * 
 * @property {Array<*>}
 */

/**
 * Represents the last the data for this gamepad was updated.
 * 
 * @private
 * 
 * @property {DOMHighResTimeStamp}
 */

/**
 * @param {GamepadEvent} ev The event object returned from `ongamepadconnected`.
 */
function Controller(ev) {
  _classCallCheck(this, Controller);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "index", void 0);

  _defineProperty(this, "mapping", void 0);

  _defineProperty(this, "connected", void 0);

  _defineProperty(this, "buttons", []);

  _defineProperty(this, "axes", []);

  _defineProperty(this, "timestamp", void 0);

  this.id = ev.id;
  this.index = ev.index;
  this.mapping = ev.mapping;
  this.connected = ev.connected;
  this.buttons = ev.buttons;
  this.axes = ev.axes;
  this.timestamp = ev.timestamp;
};

exports["default"] = Controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImV2IiwiaWQiLCJpbmRleCIsIm1hcHBpbmciLCJjb25uZWN0ZWQiLCJidXR0b25zIiwiYXhlcyIsInRpbWVzdGFtcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztJQUdxQkEsVTtBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7O0FBR0Esb0JBQVlDLEVBQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxtQ0F2QkMsRUF1QkQ7O0FBQUEsZ0NBZEYsRUFjRTs7QUFBQTs7QUFDbkIsT0FBS0MsRUFBTCxHQUFVRCxFQUFFLENBQUNDLEVBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWFGLEVBQUUsQ0FBQ0UsS0FBaEI7QUFDQSxPQUFLQyxPQUFMLEdBQWVILEVBQUUsQ0FBQ0csT0FBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCSixFQUFFLENBQUNJLFNBQXBCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlTCxFQUFFLENBQUNLLE9BQWxCO0FBQ0EsT0FBS0MsSUFBTCxHQUFZTixFQUFFLENBQUNNLElBQWY7QUFDQSxPQUFLQyxTQUFMLEdBQWlCUCxFQUFFLENBQUNPLFNBQXBCO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICAvKipcclxuICAgKiBUaGUgaWQgb2YgdGhlIGdhbWVwYWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hhdCBvcmRlciB0aGlzIGNvbnRyb2xsZXIgd2FzIHBsdWdnZWQgaW4uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgcmVtYXBwZWQgdGhlIGNvbnRyb2xzIHRvIHRoZSBzdGFuZGFyZCBsYXlvdXQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBtYXBwaW5nOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZ2FtZXBhZCBpcyBzdGlsbCBjb25uZWN0ZWQgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqL1xyXG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJ1dHRvbnMgb24gdGhpcyBnYW1lcGFkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTwqPn1cclxuICAgKi9cclxuICBidXR0b25zOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbmFsb2cgc3RpY2tzIG9uIHRoaXMgZ2FtZXBhZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8Kj59XHJcbiAgICovXHJcbiAgYXhlczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBSZXByZXNlbnRzIHRoZSBsYXN0IHRoZSBkYXRhIGZvciB0aGlzIGdhbWVwYWQgd2FzIHVwZGF0ZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0RPTUhpZ2hSZXNUaW1lU3RhbXB9XHJcbiAgICovXHJcbiAgdGltZXN0YW1wOiBET01IaWdoUmVzVGltZVN0YW1wO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVwYWRFdmVudH0gZXYgVGhlIGV2ZW50IG9iamVjdCByZXR1cm5lZCBmcm9tIGBvbmdhbWVwYWRjb25uZWN0ZWRgLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGV2OiBhbnkpIHtcclxuICAgIHRoaXMuaWQgPSBldi5pZDtcclxuICAgIHRoaXMuaW5kZXggPSBldi5pbmRleDtcclxuICAgIHRoaXMubWFwcGluZyA9IGV2Lm1hcHBpbmc7XHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGV2LmNvbm5lY3RlZDtcclxuICAgIHRoaXMuYnV0dG9ucyA9IGV2LmJ1dHRvbnM7XHJcbiAgICB0aGlzLmF4ZXMgPSBldi5heGVzO1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSBldi50aW1lc3RhbXA7XHJcbiAgfVxyXG59Il19