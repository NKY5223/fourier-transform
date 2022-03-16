class Complex {
    /**
     * @param {number} re 
     * @param {number} im 
     */
    constructor(re = 0, im = 0) {
        this.re = re;
        this.im = im;
        this.mag = null;
        this.phase = null;
    }
    /**
     * @param {Complex} z 
     */
    add(z) {
        this.re += z.re;
        this.im += z.im;
        return this;
    }
    /**
     * @param {Complex} a 
     * @param {Complex} b 
     */
    static add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }
    /**
     * @param {Complex[]} arr 
     */
    static sum(arr) {
        const sum = new Complex();
        arr.forEach(sum.add, sum);
        return sum;
    }

    /**
     * @param {Complex} z 
     */
    mult(z) {
        let tempRe = this.re;
        this.re = this.re * z.re - this.im * z.im;
        this.im = tempRe * z.im + this.im * z.re;
        return this;
    }
    /**
     * @param {number} re 
     * @param {number} im 
     */
    multSep(re, im) {
        let tempRe = this.re;
        this.re = this.re * re - this.im * im;
        this.im = tempRe * im + this.im * re;
        return this;
    }
    /**
     * @param {number} n 
     */
    multReal(n) {
        this.re *= n;
        this.im *= n;
        return this;
    }
    /**
     * @param {Complex} a 
     * @param {Complex} b 
     */
    static mult(a, b) {
        return new Complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
    }

    /**
     * @param {number} n 
     */
    static expI(n) {
        return new Complex(Math.cos(n), Math.sin(n));
    }

    calcMag() {
        this.mag = Math.sqrt(this.re * this.re + this.im * this.im);
    }
    calcPhase() {
        this.phase = Math.atan2(this.im, this.re);
    }
}