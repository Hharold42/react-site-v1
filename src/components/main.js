import React from "react";
import './main.css';

const Hero = ({imageSrc}) => {
	return (<div className="hero">
		<img src={imageSrc} alt="Base" className="hero__image"/>
		<h1 className="hero__title">Negimatzhanov Marat</h1>
	</div>);
};

export default Hero
