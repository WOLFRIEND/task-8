import Device from "../Device/Device";

export default class Speaker extends Device{
    constructor (name, power) {
        super(name, power);
        this._minVolume = 1;
        this._maxVolume = 100;
        this._volume = this._maxVolume / 2;
        this._subwoofer = false;
        this._bassBoost = false;


    }

    get volume() {
        return this._volume;
    }

    set volume(volume) {
        if(volume >= this._maxVolume) {
            this._volume = this._maxVolume
        } else if(volume <= this._minVolume) {
            this._volume = this._minVolume
        } else {
            this._volume = volume;
        }
    }

    increaseVolume() {
        if(this._volume < this._maxVolume) {
            this._volume ++;
        }
    }
    decreaseVolume() {
        if(this._volume > this._minVolume) {
            this._volume --;
        }
    }

    bassBoostOn() {
        this._bassBoost = true;
        this._subwoofer = true;
    }

    bassBoostOff() {
        this._bassBoost = false;
        this._subwoofer = false;
    }

}