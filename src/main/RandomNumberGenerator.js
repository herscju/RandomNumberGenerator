/**
 * 
 */
export default class RandomNumberGenerator{

    min = 0;
    max = 1;

    /**
     * 
     */
    constructor() {
        //
    }

    /**
     * 
     * @param {*} min 
     * @param {*} max 
     */
    setMinMax(min, max) {
        this.min = (min || min === 0 && min <= max) ? min : this.min;
        this.max = (max || max === 0 && max > min) ? max : this.max;
    }

    /**
     * 
     */
    random() {
        return this.min + (this.max - this.min + 1) * crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;
    }
}
