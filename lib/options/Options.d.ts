/**
 * Defines the options available for an instance of Controllerhawk and their default values.
 */
export default class Options {
    /**
     * Indicates if Controllerhawk should not use its internal game loop for updating the controller values.
     *
     * @default true
     */
    disableGameLoop: boolean;
    /**
     * @param {Object} options The initialization options passed to Controllerhawk.
     */
    constructor(options: Object);
}
