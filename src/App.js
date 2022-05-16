import './App.css';
import me from './assets/me.jpg'
import school from './assets/school.jpg'
import school_face from './assets/school_face.jpeg'
import rpng from './assets/react.png'
import Hero from './components/main';
import Slider from './components/slider';
import Navbar from './components/navbar';

const navbarLinks = [
	{url: '#', title: 'Home'},
	{url: '#', title: 'About'},
	{url: '#', title: 'Links'},
]

function App() {
	return <div className="App">
		<Navbar navbarLinks={navbarLinks}/>
	  	<Hero imageSrc={me}/>
		<Slider 
	  		imageSrc={rpng} 
			title={"I am front-end React developer"}
			subtitle={'I know:\nJS, TypeScript, React, HTML, CSS/less/sass'}
			flipped={true}
		/>
		<Slider 
	  		imageSrc={school_face} 
			title={<p>Student of '<a href='https://21-school.ru/' target="_blank">school 21</a>' in Kazan</p>}
			subtitle={""}
			flipped={false}
		/>
  </div>;
}

export default App;
