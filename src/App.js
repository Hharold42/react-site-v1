import './App.css';
import me from './assets/me.png'
import me2 from './assets/me2.png'
import school_face from './assets/school_face.jpeg'
import rpng from './assets/react.png'
import Hero from './components/main';
import Slider from './components/slider';
import Navbar from './components/navbar';
import About from './components/about'
import Links from './components/links';
import {AiFillGithub, AiOutlinePhone} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'


const linksrc = [
	{url: "https://github.com/Hharold42", title: "GitHub", type: "link", img: <AiFillGithub/>},
	{url: "https://t.me/NegimatzhanovM", title: "Telegram", type: "link", img: <BsTelegram/>},
	{url: "tel:+7-904-712-71-33", title: "+7-904-712-71-33", type: "number", img: <AiOutlinePhone/>},
	
]

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
	{title: 'Пишу фронтэнд на JS и REACT', type: 'skills'},
	{title: "Занимаюсь разработкой RESTful API на Django", type: 'skills'},
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
	  	<Hero imageSrc1={me} imageSrc2={me2} id={"hero"}/>
		<Slider 
	  		imageSrc={rpng} 
			title={"I am front-end React developer"}
			subtitle={'I know:\nJS, TypeScript, JSX, React, HTML, CSS/less/sass'}
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
		<Links
			linkSrc={linksrc}
			id = {"links"}
		/>
  </div>;
}

export default App;
