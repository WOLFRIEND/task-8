// Device classes
import Home from './components/Home/Home';
import Device from './components/Device/Device';
import Speaker from './components/Speaker/Speaker';
import Bulb from './components/Bulb/Bulb';
import Kettle from './components/Kettle/Kettle';

// View
import SpeakerView from './components/Speaker/SpeakerView';
import KettleView from './components/Kettle/KettleView'
import HomeView from './components/Home/HomeView'

// Styles
import './index.scss'



let home = new Home('WOLFRIEND - Home', 'Kharkiv');
let homeView = new HomeView(home, document.getElementById('root'));

window.home = home;
window.homeView = homeView;

homeView.render();

/*
// Kettle
let kettle = new Kettle('myKettle', 100, 1);
let kettleView = new KettleView(kettle, document.getElementById('root'));
kettleView.render();
window.kettle = kettle;
window.kettleView = kettleView;
*/





/*
window.Home = Home;
window.HomeView = HomeView;
window.Device = Device;
window.Speaker = Speaker;
window.SpeakerView = SpeakerView;
window.Bulb = Bulb;
window.Kettle = Kettle;*/
