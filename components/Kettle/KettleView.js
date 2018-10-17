export default class KettleView {
    constructor(kettle, rootElement) {
        this._kettle = kettle;
        this._rootElement = rootElement;
    }

    render() {
        // Main Container
        let kettle = document.createElement('div');
        kettle.className = 'kettle';
        kettle.style.backgroundColor = '#ebebe4';

        // On Off State
        let isOnState = document.createElement('div');
        isOnState.className = 'kettle__state';
        let switchIsOnState = () => {
            isOnState.innerText = `State: ${this._kettle.isOn ? 'On' : 'Off'}`
        };

        // On Button
        let isOnStateButtonOn = document.createElement("button");
        isOnStateButtonOn.className = 'kettle__state-button button button_on';
        isOnStateButtonOn.type = 'button';
        isOnStateButtonOn.innerText = 'On';
        isOnStateButtonOn.addEventListener('click', () => {
            this._kettle.switchOn();
            switchIsOnState();
            kettleImage.src = './img/Kettle/Kettle-on.png';
            temperatureInputText.disabled = false;
            boilButton.disabled = false;
            boilTimerInput.disabled = false;
            boilTimerButton.disabled = false;
            kettle.style.backgroundColor = '#bcebeb'
        });

        // Off Button
        let isOnStateButtonOff = document.createElement("button");
        isOnStateButtonOff.className = 'kettle__state-button button button_off';
        isOnStateButtonOff.type = 'button';
        isOnStateButtonOff.innerText = 'Off';
        isOnStateButtonOff.addEventListener('click', () => {
            this._kettle.switchOff();
            this._kettle.temperature = this._kettle._minTemperature;
            kettleImage.src = './img/Kettle/Kettle-off.png';
            switchIsOnState();
            switchTemperature();
            temperatureInputText.value = this._kettle._temperature;
            boilTimerInput.value = '';
            temperatureInputText.disabled = true;
            boilButton.disabled = true;
            boilTimerInput.disabled = true;
            boilTimerButton.disabled = true;
            kettle.style.backgroundColor = '#ebebe4';
        });

        // Name
        let name = document.createElement('div');
        name.className = 'kettle__name';
        name.innerText = `Device name: ${this._kettle.name}`;

        // Power
        let power = document.createElement('div');
        power.className = 'kettle__power';
        power.innerText = `Device power: ${this._kettle.power}`;

        // Current Temperature
        let temperature = document.createElement('div');
        temperature.className = 'kettle__temperature';
        let switchTemperature = () => {
            temperature.innerText = `Device temperature: ${this._kettle.temperature}`;
        };

        // Set Temperature
        let temperatureInputText = document.createElement('input');
        temperatureInputText.className = 'kettle__temperature-text';
        temperatureInputText.style.display = 'block';
        temperatureInputText.type = 'number';
        temperatureInputText.min = this._kettle._minTemperature;
        temperatureInputText.max = this._kettle._maxTemperature;
        temperatureInputText.value = this._kettle._temperature;
        temperatureInputText.disabled = true;
        temperatureInputText.oninput = () => {
           if(temperatureInputText.value <= this._kettle._maxTemperature && temperatureInputText.value >= this._kettle._minTemperature) {
               this._kettle.temperature = temperatureInputText.value;
               switchTemperature();
               if(this._kettle._temperature === this._kettle._maxTemperature) {
                   kettleImage.src = './img/Kettle/Kettle-boiled.png'
               }
               switchTemperature();
           } else {
               temperatureInputText.value = this._kettle._temperature;
           }
        };

        // Boil
        // Boil Button
        let boilButton = document.createElement('button');
        boilButton.className = 'kettle__boil-button button button_on';
        boilButton.type = 'button';
        boilButton.innerText = 'Boil';
        boilButton.disabled = true;
        boilButton.addEventListener('click', () => {
           this._kettle.boil();
           temperatureInputText.value = this._kettle.temperature;
           switchTemperature();
           kettleImage.src = './img/Kettle/Kettle-boiled.png'
        });

        // Boil Input
        let boilTimerInput = document.createElement('input');
        boilTimerInput.className = 'kettle__boil-input input';
        boilTimerInput.style.display = 'block';
        boilTimerInput.type = 'number';
        boilTimerInput.placeholder = 'set seconds to boil';
        boilTimerInput.disabled = true;

        // Boil Timer Button
        let boilTimerButton = document.createElement('button');
        boilTimerButton.className = 'kettle__boil-button button button_on';
        boilTimerButton.type = 'button';
        boilTimerButton.innerText = 'Start boil timer';
        boilTimerButton.disabled = true;
        boilTimerButton.addEventListener('click', () => {
           this._kettle.boilTimer(boilTimerInput.value);
           setTimeout(() => {
               temperatureInputText.value = this._kettle._maxTemperature;
               kettleImage.src = './img/Kettle/Kettle-boiled.png';
               switchTemperature();
               },
               boilTimerInput.value * 1000);
           boilTimerInput.value = '';
        });

        // Image
        let kettleImage = document.createElement('img');
        kettleImage.className = 'kettle__image';
        kettleImage.style.display = 'block';
        kettleImage.src = './img/Kettle/Kettle-off.png';

        // Insert To Page
        // Functions
        switchIsOnState();
        switchTemperature();
        // Elements
        // On / Off State
        kettle.appendChild(isOnState);
        kettle.appendChild(isOnStateButtonOn);
        kettle.appendChild(isOnStateButtonOff);
        // Name
        kettle.appendChild(name);
        // Power
        kettle.appendChild(power);
        // Current Temperature
        kettle.appendChild(temperature);
        // Set Temperature
        kettle.appendChild(temperatureInputText);
        // Boil
        kettle.appendChild(boilButton);
        kettle.appendChild(boilTimerInput);
        kettle.appendChild(boilTimerButton);
        // Image
        kettle.appendChild(kettleImage);
        this._rootElement.appendChild(kettle);
    }
}