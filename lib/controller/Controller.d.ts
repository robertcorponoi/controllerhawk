/**
 * TODO:
 */
export default class Controller {
    /**
     * The id of the gamepad.
     *
     * @private
     *
     * @property {string}
     */
    id: string;
    /**
     * Indicates what order this controller was plugged in.
     *
     * @private
     *
     * @property {number}
     */
    index: number;
    /**
     * Indicates whether the browser has remapped the controls to the standard layout.
     *
     * @private
     *
     * @property {string}
     */
    mapping: string;
    /**
     * Indicates whether this gamepad is still connected or not.
     *
     * @private
     *
     * @property {boolean}
     */
    connected: boolean;
    /**
     * The buttons on this gamepad.
     *
     * @private
     *
     * @property {Array<*>}
     */
    buttons: Array<any>;
    /**
     * The analog sticks on this gamepad.
     *
     * @private
     *
     * @property {Array<*>}
     */
    axes: Array<any>;
    /**
     * Represents the last the data for this gamepad was updated.
     *
     * @private
     *
     * @property {DOMHighResTimeStamp}
     */
    timestamp: DOMHighResTimeStamp;
    /**
     * @param {GamepadEvent} ev The event object returned from `ongamepadconnected`.
     */
    constructor(ev: any);
}
