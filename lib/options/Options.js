'use strict';
/**
 * Defines the options available for an instance of Controllerhawk and their default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFDbkI7Ozs7OztBQU9BOzs7QUFHQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBLDJDQUxGLEtBS0U7O0FBQzNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYW4gaW5zdGFuY2Ugb2YgQ29udHJvbGxlcmhhd2sgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIENvbnRyb2xsZXJoYXdrIHNob3VsZCBub3QgdXNlIGl0cyBpbnRlcm5hbCBnYW1lIGxvb3AgZm9yIHVwZGF0aW5nIHRoZSBjb250cm9sbGVyIHZhbHVlcy5cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgZGlzYWJsZUdhbWVMb29wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zIHBhc3NlZCB0byBDb250cm9sbGVyaGF3ay5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG59Il19