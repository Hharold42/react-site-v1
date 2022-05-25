import './App.css';
import me from './assets/me.jpg'
import school from './assets/school.jpg'
import school_face from './assets/school_face.jpeg'
import rpng from './assets/react.png'
import Hero from './components/main';
import Slider from './components/slider';
import Navbar from './components/navbar';
import About from './components/about'

const navbarLinks = [
	{url: '#', title: 'Home'},
	{url: '#', title: 'About'},
	{url: '#', title: 'Links'},
]

const contents = [

	{type: 'ending', text: 'Я хочу:'},
	{type: 'skills', text: 'Я:'},

]

const texts = [
	{title: 'Пишу фронэнд на JS и REACT', type: 'skills'},
	{title: "Занимаюсь разработкой REST API на Django", type: 'skills'},
	{title: 'Имею базовые знания SQL/PostgreSQL', type: 'skills'},
	{title: 'Отлично работаю с Git', type: 'skills'},
	{title: 'Готов изучать другие фреймворки и языки', type: 'skills'},
	{title: 'Разрабатывать фронт или бэк', type: 'ending'},
	{title: 'Удаленную фуллтайм работу', type: 'ending'},
	{title: 'Постоянно развиваться, изучать новые технологии', type: 'ending'},
]

function App() {
	return <div className="App">
		<Navbar navbarLinks={navbarLinks}/>
	  	<Hero imageSrc={me} id={"hero"}/>
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
		<About
			title = {"About"}
			textLinks={texts}
			content = {contents}
			id={"about"}
		/>
  </div>;
}

export default App;
