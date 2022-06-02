import React from "react";
import './main.css';
import useWindowDimensions from './get_windiw';

const Hero = ({imageSrc1, imageSrc2}) => {
	const { height, width } = useWindowDimensions();
	if (width >= 940){
		return (<div className="hero">
			<img src={imageSrc1} alt="Base" className="hero__image"/>
			<h1 className="hero__title">Front-end developer</h1>
		</div>);
	}
	else {
		return (<div className="hero">
			<img src={imageSrc2} alt="Base" className="hero__image"/>
			<h1 className="hero__title">Front-end developer</h1>
		</div>);
	}

};

export default Hero
