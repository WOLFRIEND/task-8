//Device
export default class Device {
    constructor(name, power) {
        this._name = name;
        this._power = power;
        this._isOn = false;
    }

    get name() {
        return this._name;
    }
    get power() {
        return this._power;
    }
    get isOn() {
        return this._isOn;
    }


    switchOn() {
        this._isOn = true;
    }

    switchOff() {
        this._isOn = false;
    }
}