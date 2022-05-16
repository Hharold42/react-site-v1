import './App.css';
import me from './assets/me.jpg'
import school from './assets/school.jpg'
import school_face from './assets/school_face.jpeg'
import rpng from './assets/react.png'
import Hero from './components/main';
import Slider from './components/slider';

function App() {
	return <div className="App">
	  	<Hero imageSrc={me}/>
		<Slider 
	  		imageSrc={rpng} 
			title={"I am front-end React developer"}
			subtitle={'I know:\nJS, TypeScript, React, HTML, CSS/less/sass'}
			flipped={true}
		/>
		<Slider 
	  		imageSrc={school_face} 
			title={"Student of 'school 21' in Kazan"}
			subtitle={''}
			flipped={false}
		/>
  </div>;
}

export default App;
