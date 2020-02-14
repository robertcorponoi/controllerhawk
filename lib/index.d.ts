/**
 * Makes it easy for you to map controllers for your game.
 */
export default class ControllerHawk {
    /**
     * A reference to the controllers connected.
     *
     * @private
     *
     * @property {Controllers}
     */
    private _controllers;
    constructor();
    /**
     * Maps a contoller button bind to an action.
     */
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
     * @private
     */
    private _update;
    /**
     * Scans for new controllers and if so it adds them to the `_controllers` property or updates the current references.
     *
     * @private
     */
    private _scan;
}
