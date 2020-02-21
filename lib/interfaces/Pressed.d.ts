/**
 * Defines the object that contains the buttons on the controller and if they are active or not.
 */
export default interface Pressed {
    /**
     * The code of the button pressed and whether it's active or not.
     */
    [button: number]: boolean;
}
