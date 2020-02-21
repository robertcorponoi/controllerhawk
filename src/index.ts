'use strict'

import Keybind from './keybind/Keybind';
import Options from './options/Options';
import mapping from './mapping/mapping';

import Pressed from './interfaces/Pressed';
import Controllers from './interfaces/Controllers';
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
  private _options: Options;

  /**
   * A reference to the controllers connected.
   * 
   * @private
   * 
   * @property {Controllers}
   */
  private _controllers: Controllers = {};

  /**
   * A reference to the controllers and their buttons that can be used in keybinds.
   * 
   * @private
   * 
   * @property {Object}
   */
  private _BUTTONS: Object = mapping;

  /**
   * A reference to all of the keybinds that have been created.
   * 
   * @private
   * 
   * @property {Array<Keybind>}
   */
  private _keybinds: Array<Keybind> = [];

  /**
   * A reference to the buttons on the controller currently being pressed.
   * 
   * @private
   * 
   * @property {Pressed}
   */
  private _pressed: Pressed = {};

  /**
   * The values of the left analog stick.
   * 
   * @private
   * 
   * @property {AnalogStick}
   */
  private _leftAnalogStick: AnalogStick = { x: 0, y: 0 };

  /**
   * The values of the right analog stick.
   * 
   * @private
   * 
   * @property {AnalogStick}
   */
  private _rightAnalogStick: AnalogStick = { x: 0, y: 0 };

  /**
   * @param {Object} [options]
   * @param {boolean} [options.disableGameLoop=false] Indicates if Controllerhawk should not use its internal game loop for updating the controller values.
   */
  constructor(options: Object) {
    this._options = new Options(options);
    
    this._boot();
  }

  /**
   * Returns the controller mappings.
   * 
   * @returns {controller}
   */
  get BUTTONS() { return this._BUTTONS; }

  /**
   * Returns the values of the left analog stick.
   * 
   * @returns {AnalogStick}
   */
  get leftAnalogStick(): AnalogStick { return this._leftAnalogStick; }

  /**
   * Returns the values of the right analog stick.
   * 
   * @returns {AnalogStick}
   */
  get rightAnalogStick(): AnalogStick { return this._rightAnalogStick; }

  /**
   * Creates a new keybind with the specified buttons on a supported controller layout.
   * 
   * @param {...string} buttons One or more buttons from the `CONTROLLER` property to attach to this keybind.
   * 
   * @returns {Keybind} Returns the newly created keybind.
   */
  keybind(...buttons: Array<number>): (Keybind | undefined) {
    if (!buttons) {
      console.warn('At least one button must be provided to create a keybind.');
      return;
    }

    const keybind: Keybind = new Keybind(buttons);

    this._keybinds.push(keybind);

    return keybind;
  }

  /**
   * Checks to see if any keybinds are active and runs them.
   * 
   * @param {number} time The time passed from the game clock.
   */
  update(time: number) {
    this._update(time);
  }

  /**
   * Adds the necessary event listeners detecting a gamepad connecting and disconnecting.
   * 
   * @private
   */
  private _boot() {
    window.addEventListener('gamepadconnected', (ev: any) => this._onconnect(ev.gamepad));
    window.addEventListener('gamepaddisconnected', (ev: any) => this._ondisconnect(ev.gamepad));
  }

  /**
   * Adds the connected controller to the `_controllers` property and then start the game loop to update the status of 
   * buttons pressed/thumbsticks moved.
   * 
   * @private
   * 
   * @param {Event} ev The `gamepadconnected` event object.
   */
  private _onconnect(gamepad: Gamepad) {
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
  private _ondisconnect(gamepad: Gamepad) {
    delete this._controllers[gamepad.index];
  }

  /**
   * Checks to see if there are any gamepads that need to be added and performs controller actions.
   * 
   * @param {number} time The time passed from the game clock.
   * 
   * @private
   */
  private _update(time: number) {
    this._scan();

    this._updatePressed();

    this._checkKeybinds(time);

    requestAnimationFrame((time: number) => this._update(time));
  }

  /**
   * Checks for active keybinds and runs them.
   * 
   * @param {number} time The time passed from the game clock.
   * 
   * @private
   */
  private _checkKeybinds(time: number) {
    this._keybinds.map((keybind: Keybind) => {

      for (let button of keybind.buttons) {
        if (!this._pressed[button]) return;
      }

      keybind.run(time);
    });
  }

  /**
   * Updates the status of what buttons are pressed.
   * 
   * @private
   */
  private _updatePressed() {
    for (const c in this._controllers) {
      const controller: Gamepad = this._controllers[c];

      for (let i: number = 0; i < controller.buttons.length; ++i) {
        const button: GamepadButton = controller.buttons[i];

        if (button.pressed) this._pressed[i] = true;
        else this._pressed[i] = false;
      }

      const axes: readonly number[] = controller.axes;

      this._leftAnalogStick = { x: axes[0], y: axes[1] };
      this._rightAnalogStick = { x: axes[2], y: axes[3] };
    }
  }

  /**
   * Scans for new controllers and if so it adds them to the `_controllers` property or updates the current references.
   * 
   * @private
   */
  private _scan() {
    const gamepads: Array<Gamepad | null> = navigator.getGamepads();

    gamepads.map(gamepad => {
      if (!gamepad) return;

      if (!(gamepad.index in this._controllers)) this._onconnect(gamepad);
      else this._controllers[gamepad.index] = gamepad;
    });
  }
}