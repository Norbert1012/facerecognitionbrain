import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  constructor() {
    super()
    this.state = {
      input: '',
    }
}

  oninputChange = (event) => {
      console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');

  }

  return (
    <div className="App">
    <Particles className='particles'
      params={particlesOptions} />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm oninputChange={this.oninputChange} onButtonSubmit={this.onButtonSubmit}/>
    {/* {<FaceRecognition />} */}
    </div>
  );
}

export default App;
