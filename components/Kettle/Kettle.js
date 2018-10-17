import Device from "../Device/Device";

//Kettle
export default class Kettle extends Device{
    constructor (name, power) {
        super(name, power);
        this._temperature = 1;
        this._minTemperature = 1;
        this._maxTemperature = 100;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(temperature) {
        if(temperature >= this._maxTemperature) {
            this._temperature = this._maxTemperature;
        } else if(temperature <= this._minTemperature) {
            this._temperature = this._minTemperature;
        } else {
            this._temperature = temperature;
        }
    }

    boil() {
        this._temperature = this._maxTemperature;
    }



    boilTimer(seconds) {
        let boil = () => {
            this._temperature = this._maxTemperature;
        };
        setTimeout(boil, seconds * 1000)
    }
}