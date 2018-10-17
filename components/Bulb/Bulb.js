import Device from "../Device/Device";

export default class Bulb extends Device{
    constructor (name, power) {
        super(name, power);
        this._brightness = 5;
        this._minBrightness = 1;
        this._maxBrightness = 10;
        this._colorList = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        this._color = this._colorList[0];
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(brightness) {

        if(brightness >= this._maxBrightness) {
            this._brightness = this._maxBrightness;
        } else if(brightness <= this._minBrightness) {
            this._brightness = this._minBrightness;
        } else {
            this._brightness = brightness;
        }
    }
    increaseBrightness() {
        if(this._brightness < this._maxBrightness) {
            this._brightness ++;
        }
    }

    decreaseBrightness() {
        if(this._brightness > this._minBrightness) {
            this._brightness --;
        }
    }

    get color() {
        return this._color;
    }

    set color(color) {
        if(this._colorList.indexOf(color) !== -1) {
            this._color = color;
        } else {
            this._color = this._colorList[0];
        }
    }

    randomColor() {
        let self = this;

        function colorAssign() {
            //Get random number
            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) ) + min;
            }
            //Assign corresponding color, depending on the 'randomNumber' function result
            self._color = self._colorList[randomNumber(0, self._colorList.length)];
        }
        setInterval(colorAssign, 1000);
    }
}