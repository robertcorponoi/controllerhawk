'use strict'

/**
 * A keybind represents one button or a combination of buttons that perform an action.
 */
export default class Keybind {
  /**
   * The buttons that are assigned to this keybind.
   * 
   * @private
   * 
   * @property {KeybindObject}
   */
  private _buttons: Array<number>;

  /**
   * The callback method to run when this keybind is used.
   * 
   * @private
   * 
   * @property {Function}
   * 
   * @default this.noop
   */
  private _action: Function = this._noop;

  /**
   * The timestamp of the last time this keybind was used.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 0
   */
  private _lastUsed: number = 0;

  /**
   * @param {KeybindObject} buttons The buttons to bind to this keybind.
   */
  constructor(buttons: Array<number>) {
    this._buttons = buttons;
  }

  /**
   * Returns the buttons for this keybind.
   * 
   * @returns {Array<number>}
   */
  get buttons(): Array<number> { return this._buttons; }

  /**
   * Returns the last time that this keybind was used.
   * 
   * @returns {number}
   */
  get lastUsed(): number { return this._lastUsed; }

  /**
   * Sets the function to run when this keybind is used.
   * 
   * @param {Function} fn The function to run when this keybind is used.
   * 
   * @returns {Keybind} Returns this for chaining.
   */
  action(fn: Function): Keybind {
    this._action = fn;

    return this;
  }

  /**
   * Runs the function associated with this keybind.
   * 
   * @param {number} time The timestamp passed from the game clock.
   */
  run(time: number) {
    this._action();

    this._lastUsed = time;
  }

  /**
   * An empty function to use as a default value for the action of this keybind.
   * 
   * @private
   */
  private _noop() { }
}