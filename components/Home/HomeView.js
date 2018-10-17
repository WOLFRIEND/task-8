import Speaker from '../Speaker/Speaker'
import SpeakerView from "../Speaker/SpeakerView";
import Kettle from "../Kettle/Kettle";
import KettleView from "../Kettle/KettleView";

export default class HomeView {
    constructor(home, rootElement) {
        this._home = home;
        this._rootElement = rootElement;
    }

    render() {
        // Main container
        let home = document.createElement('div');
        home.className = 'home';

        // Name
        let name = document.createElement('div');
        name.className = 'home__name';
        name.innerText = `Home: ${this._home.name}`;

        // Location
        let location = document.createElement('div');
        location.className = 'home__location';
        location.innerText = `Location: ${this._home.location}`;

        // Device List
        let deviceList = document.createElement('select');
        deviceList.className = 'home__list';
        // List Item Speaker
        let listItemSpeaker = document.createElement('option');
        listItemSpeaker.className = 'home__item';
        listItemSpeaker.text = 'Speaker';
        listItemSpeaker.value = Speaker;
        deviceList.appendChild(listItemSpeaker);
        // List Item Kettle
        let listItemKettle = document.createElement('option');
        listItemKettle.className = 'home__item';
        listItemKettle.text = 'Kettle';
        listItemKettle.value = Kettle;
        deviceList.appendChild(listItemKettle);
        // Device Name Input
        let deviceNameInput = document.createElement('input');
        deviceNameInput.className = 'home__input';
        deviceNameInput.type = 'text';
        deviceNameInput.placeholder = 'enter device name';
        // Device Power Input
        let devicePowerInput = document.createElement('input');
        devicePowerInput.className = 'home__input';
        devicePowerInput.type = 'number';
        devicePowerInput.placeholder = 'enter device power';
        // Device List Buttons
        let addDeviceButtonOn = document.createElement('button');
        addDeviceButtonOn.className = 'home__button button button_on';
        addDeviceButtonOn.type = 'button';
        addDeviceButtonOn.innerText = 'Add device';
        addDeviceButtonOn.addEventListener('click', () => {
            let deviceName = deviceNameInput.value;
            let devicePower = devicePowerInput.value;
           /* this._home.addDevice(new Speaker(deviceNameInput.deviceName, 5));*/
            let deviceListValue = deviceList.options[deviceList.selectedIndex].text;
            if(deviceListValue === 'Speaker') {
                deviceName = new Speaker(deviceName, devicePower);
                this._home.addDevice(deviceName);
                let speakerView = new SpeakerView(deviceName, document.getElementById('root'));
                speakerView.render();
                deviceNameInput.value = '';
                devicePowerInput.value = '';
            } else if (deviceListValue === 'Kettle') {
                deviceName = new Kettle(deviceName, devicePower);
                this._home.addDevice(deviceName);
                let kettleView = new KettleView(deviceName, document.getElementById('root'));
                kettleView.render();
                deviceNameInput.value = '';
                devicePowerInput.value = '';
            }


        });



        // Insert to page

        // Name
        home.appendChild(name);
        // Location
        home.appendChild(location);

        // Device List
        home.appendChild(deviceList);

        // Device Name Input
        home.appendChild(deviceNameInput);

        // Device Power Input
        home.appendChild(devicePowerInput);

        // Device List Button On
        home.appendChild(addDeviceButtonOn);


        this._rootElement.innerHTML = "";
        this._rootElement.appendChild(home);
    }
}