import React from "react";
import './about.css'

const About = ({textLinks, content, title}) => {
	return (<div className="about">
		<hr className="about__bl" />
		<h1 alt="Base" className="about__title">{title}</h1>
		{content.map(item => {
			if (item.type === "skills"){
				return (
					<p className="about__skills">{item.text}</p>
				)
			}
		})}
		<ul className="about__table">
			{textLinks.map(item =>{
				if (item.type === "skills"){
					return(
						<li className="about__item"> {item.title} </li>
					);
				}
			})}
		</ul>
		<hr className="about__bl bl_2"/>
		{content.map(item => {
			if (item.type === "ending"){
				return (
					<p className="about__skills">{item.text}</p>
				)
			}
		})}
		<ul className="about__table">
			{textLinks.map(item =>{
				if (item.type === "ending"){
					return(
						<li className="about__item"> {item.title} </li>
					);
				}
			})}
		</ul>
	</div>)
}

export default About
