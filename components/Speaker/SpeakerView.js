
export default class SpeakerView{
    constructor(speaker, rootElement) {
        this._speaker = speaker;
        this._rootElement = rootElement;
    }

    render() {
        // Main container
        let speaker = document.createElement('div');
        speaker.className = 'speaker';
        speaker.style.backgroundColor = '#ebebe4';

        // On / Off State
        let isOnState = document.createElement('div');
        isOnState.className = 'speaker__state';
        let switchIsOnState = () => {
            isOnState.innerText = `State: ${this._speaker.isOn ? 'On' : 'Off'}`
        };
        // On Button
        let isOnStateButtonOn = document.createElement("button");
        isOnStateButtonOn.className = 'speaker__state-button button button_on';
        isOnStateButtonOn.type = 'button';
        isOnStateButtonOn.innerText = 'On';
        isOnStateButtonOn.addEventListener('click', () => {
           this._speaker.switchOn();
           switchIsOnState();
           speakerImage.src = './img/Speaker/Speaker-on.png';
           bassBoostButtonOn.disabled = false;
           bassBoostButtonOff.disabled = false;
           volumeInputRange.disabled = false;
           volumeInputText.disabled = false;
            speaker.style.backgroundColor = '#bcebeb';
        });
        // Off Button
        let isOnStateButtonOff = document.createElement("button");
        isOnStateButtonOff.className = 'speaker__state-button button button_off';
        isOnStateButtonOff.type = 'button';
        isOnStateButtonOff.innerText = 'Off';
        isOnStateButtonOff.addEventListener('click', () => {
            this._speaker.switchOff();
            this._speaker.bassBoostOff();
            this._speaker._volume = this._speaker._maxVolume / 2;
            volumeInputRange.value = this._speaker._volume;
            volumeInputText.value = this._speaker._volume;
            switchIsOnState();
            switchBassBoost();
            switchVolume();
            speakerImage.src = './img/Speaker/Speaker-off.png';
            bassBoostButtonOn.disabled = true;
            bassBoostButtonOff.disabled = true;
            volumeInputRange.disabled = true;
            volumeInputText.disabled = true;
            speaker.style.backgroundColor = '#ebebe4';
        });

        // Name
        let name = document.createElement('div');
        name.className = 'speaker__name';
        name.innerText = `Device name: ${this._speaker.name}`;

        // Power
        let power = document.createElement('div');
        power.className = 'speaker__power';
        power.innerText = `Device power: ${this._speaker.power}`;

        // Current Volume
        let volume = document.createElement('div');
        volume.className = 'speaker__volume';
        let switchVolume = () => {
            volume.innerText = `Device volume: ${this._speaker._volume}`;
        };

        // Set Volume
        // By Range:
        let volumeInputRange = document.createElement('input');
        volumeInputRange.style.display = 'block';
        volumeInputRange.className = 'speaker__volume-range';
        volumeInputRange.id = 'speaker__volume-range';
        volumeInputRange.type = 'range';
        volumeInputRange.value = this._speaker._volume;
        volumeInputRange.min = this._speaker._minVolume;
        volumeInputRange.max = this._speaker._maxVolume;
        volumeInputRange.disabled = true;
        volumeInputRange.oninput = () => {
            volume.innerText = `Volume: ${volumeInputRange.value}`;
            this._speaker.volume = volumeInputRange.value;
            volumeInputText.value = volumeInputRange.value;
        };
        // By Input
        let volumeInputText = document.createElement('input');
        volumeInputText.className = 'speaker__volume-text';
        volumeInputText.style.display = 'block';
        volumeInputText.type = 'number';
        volumeInputText.min = this._speaker._minVolume;
        volumeInputText.max = this._speaker._maxVolume;
        volumeInputText.value = this._speaker._volume;
        volumeInputText.disabled = true;
        volumeInputText.addEventListener('oninput', () => {
            if(volumeInputText.value <= this._speaker._maxVolume && volumeInputText.value >= this._speaker._minVolume) {
                this._speaker.volume(volumeInputText.value);
                volume.innerText = `Volume: ${volumeInputText.value}`;
                volumeInputRange.value = volumeInputText.value;
            } else {
                volumeInputText.value = this._speaker._volume;
            }
        });

        // Bass Boost
        let bassBoost = document.createElement('div');
        bassBoost.className = 'speaker__bassboost';
        let switchBassBoost = () => {
            bassBoost.innerText = `Bass Boost: ${this._speaker._bassBoost ? 'On' : 'Off'}`
        };
        // Bass Boost Button On
        let bassBoostButtonOn = document.createElement("button");
        bassBoostButtonOn.className = 'speaker__bassboost-button button button_on';
        bassBoostButtonOn.type = 'button';
        bassBoostButtonOn.innerText = 'On';
        bassBoostButtonOn.disabled = true;
        bassBoostButtonOn.addEventListener('click', () => {
            this._speaker.bassBoostOn();
            switchBassBoost();
            speakerImage.src = './img/Speaker/Speaker-bassbost.png';
            });
        // Bass Boost Button Off
        let bassBoostButtonOff = document.createElement("button");
        bassBoostButtonOff.className = 'speaker__bassboost-button button button_off';
        bassBoostButtonOff.type = 'button';
        bassBoostButtonOff.innerText = 'Off';
        bassBoostButtonOff.disabled = true;
        bassBoostButtonOff.addEventListener('click', () => {
            this._speaker.bassBoostOff();
            switchBassBoost();
            speakerImage.src = './img/Speaker/Speaker-on.png';
        });

        // Image
        let speakerImage = document.createElement('img');
        speakerImage.className = 'speaker__image';
        speakerImage.style.display = 'block';
        speakerImage.src = './img/Speaker/Speaker-off.png';


        // Insert to page
        // Functions
        switchIsOnState();
        switchVolume();
        switchBassBoost();
        // Elements
        // On / Off state
        speaker.appendChild(isOnState);
        speaker.appendChild(isOnStateButtonOn);
        speaker.appendChild(isOnStateButtonOff);
        // Name
        speaker.appendChild(name);
        // Power
        speaker.appendChild(power);
        // Volume
        speaker.appendChild(volume);
        speaker.appendChild(volumeInputRange);
        speaker.appendChild(volumeInputText);
        // Bass Boost
        speaker.appendChild(bassBoost);
        speaker.appendChild(bassBoostButtonOn);
        speaker.appendChild(bassBoostButtonOff);
        // Image
        speaker.appendChild(speakerImage);
        // Who's know?
        /*this._rootElement.innerHTML = "";*/
        this._rootElement.appendChild(speaker);
    }

}

