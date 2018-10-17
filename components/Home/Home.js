import Speaker from '../Speaker/Speaker'


export default class Home {
    constructor(name, location) {
        this._name = name;
        this._location = location;
        this._devices = new Map();
    }

    get name() {
        return this._name;
    }
    get location() {
        return this._location;
    }

    getDeviceByName(name) {
        return this._devices.get(name)
    }

    get devices() {
        return this._devices;
    }

    addDevice(device) {
        if(this._devices.has(device._name)) {
            throw new Error('Device with same name already exists.')
        } else {
            this._devices.set(device._name, device)
        }
    }

    deleteDevice(deviceName) {
        this._devices.delete(deviceName);
    }

    deleteAllDevices() {
        this._devices.clear();
    }

    switchOffAllDevices() {
        this._devices.forEach( device => device.switchOff());
    }
}