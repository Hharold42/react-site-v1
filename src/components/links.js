import React from "react";
import './links.css';
import {FiMenu, FiX} from 'react-icons/fi'

const Links = ({linkSrc}) =>{
	return (<div className="links">
		<h1 alt="Base" className="links__title">Links</h1>
		<ul className="links__list">
			{linkSrc.map(item => {
				return (
					<li className="links__item" key={item.title}>
						<a className="links__link" href={item.url} target="_blank">
							{item.img}  {item.title}
						</a>
					</li>
				)
			})}
		</ul>
	</div>)
}


export default Links
