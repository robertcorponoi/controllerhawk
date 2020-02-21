import Keybind from './keybind/Keybind';
import AnalogStick from './interfaces/AnalogStick';
/**
 * The controller/gamepad version of keyhawk, manage your game's keybinds for users using a controller.
 */
export default class ControllerHawk {
    /**
     * A reference to the options passed to Controllerhawk.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the controllers connected.
     *
     * @private
     *
     * @property {Controllers}
     */
    private _controllers;
    /**
     * A reference to the controllers and their buttons that can be used in keybinds.
     *
     * @private
     *
     * @property {Object}
     */
    private _BUTTONS;
    /**
     * A reference to all of the keybinds that have been created.
     *
     * @private
     *
     * @property {Array<Keybind>}
     */
    private _keybinds;
    /**
     * A reference to the buttons on the controller currently being pressed.
     *
     * @private
     *
     * @property {Pressed}
     */
    private _pressed;
    /**
     * The values of the left analog stick.
     *
     * @private
     *
     * @property {AnalogStick}
     */
    private _leftAnalogStick;
    /**
     * The values of the right analog stick.
     *
     * @private
     *
     * @property {AnalogStick}
     */
    private _rightAnalogStick;
    /**
     * @param {Object} [options]
     * @param {boolean} [options.disableGameLoop=false] Indicates if Controllerhawk should not use its internal game loop for updating the controller values.
     */
    constructor(options: Object);
    /**
     * Returns the controller mappings.
     *
     * @returns {controller}
     */
    get BUTTONS(): Object;
    /**
     * Returns the values of the left analog stick.
     *
     * @returns {AnalogStick}
     */
    get leftAnalogStick(): AnalogStick;
    /**
     * Returns the values of the right analog stick.
     *
     * @returns {AnalogStick}
     */
    get rightAnalogStick(): AnalogStick;
    /**
     * Creates a new keybind with the specified buttons on a supported controller layout.
     *
     * @param {...string} buttons One or more buttons from the `CONTROLLER` property to attach to this keybind.
     *
     * @returns {Keybind} Returns the newly created keybind.
     */
    keybind(...buttons: Array<number>): (Keybind | undefined);
    /**
     * Checks to see if any keybinds are active and runs them.
     *
     * @param {number} time The time passed from the game clock.
     */
    update(time: number): void;
    /**
     * Adds the necessary event listeners detecting a gamepad connecting and disconnecting.
     *
     * @private
     */
    private _boot;
    /**
     * Adds the connected controller to the `_controllers` property and then start the game loop to update the status of
     * buttons pressed/thumbsticks moved.
     *
     * @private
     *
     * @param {Event} ev The `gamepadconnected` event object.
     */
    private _onconnect;
    /**
     * Removes the disconnected controller from the `_controllers` property.
     *
     * @private
     *
     * @param {Event} ev The `gamepaddisconnected` event object.
     */
    private _ondisconnect;
    /**
     * Checks to see if there are any gamepads that need to be added and performs controller actions.
     *
     * @param {number} time The time passed from the game clock.
     *
     * @private
     */
    private _update;
    /**
     * Checks for active keybinds and runs them.
     *
     * @param {number} time The time passed from the game clock.
     *
     * @private
     */
    private _checkKeybinds;
    /**
     * Updates the status of what buttons are pressed.
     *
     * @private
     */
    private _updatePressed;
    /**
     * Scans for new controllers and if so it adds them to the `_controllers` property or updates the current references.
     *
     * @private
     */
    private _scan;
}
