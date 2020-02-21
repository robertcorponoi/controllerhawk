'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ps = _interopRequireDefault(require("./ps4"));

var _xbox = _interopRequireDefault(require("./xbox"));

var _generic = _interopRequireDefault(require("./generic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Imports all of the individual mappings and provides a way to access any supported controller layout.
 */
var _default = {
  /**
   * The layout for the ps4 controller.
   */
  PS4: _ps["default"],

  /**
   * The layout for the general xbox/xbox360 controller.
   */
  XBOX: _xbox["default"],

  /**
   * The layout for a generic controller.
   */
  GENERIC: _generic["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXBwaW5nL21hcHBpbmcudHMiXSwibmFtZXMiOlsiUFM0IiwicHM0IiwiWEJPWCIsInhib3giLCJHRU5FUklDIiwiZ2VuZXJpYyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7ZUFHZTtBQUNiOzs7QUFHQUEsRUFBQUEsR0FBRyxFQUFFQyxjQUpROztBQU1iOzs7QUFHQUMsRUFBQUEsSUFBSSxFQUFFQyxnQkFUTzs7QUFXYjs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBRUM7QUFkSSxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgcHM0IGZyb20gJy4vcHM0JztcclxuaW1wb3J0IHhib3ggZnJvbSAnLi94Ym94JztcclxuaW1wb3J0IGdlbmVyaWMgZnJvbSAnLi9nZW5lcmljJztcclxuXHJcbi8qKlxyXG4gKiBJbXBvcnRzIGFsbCBvZiB0aGUgaW5kaXZpZHVhbCBtYXBwaW5ncyBhbmQgcHJvdmlkZXMgYSB3YXkgdG8gYWNjZXNzIGFueSBzdXBwb3J0ZWQgY29udHJvbGxlciBsYXlvdXQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxheW91dCBmb3IgdGhlIHBzNCBjb250cm9sbGVyLlxyXG4gICAqL1xyXG4gIFBTNDogcHM0LFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGF5b3V0IGZvciB0aGUgZ2VuZXJhbCB4Ym94L3hib3gzNjAgY29udHJvbGxlci5cclxuICAgKi9cclxuICBYQk9YOiB4Ym94LFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGF5b3V0IGZvciBhIGdlbmVyaWMgY29udHJvbGxlci5cclxuICAgKi9cclxuICBHRU5FUklDOiBnZW5lcmljXHJcbn0iXX0=