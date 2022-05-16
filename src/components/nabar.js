import React from "react";
import './navbar.css'
import {FiMenu, Fix} from 'react-icons/fi'

// const navbarLinks = [
// 	{url: '/home', title: 'Home'}
// ]

const Navbar = ({navbarLinks}) => {
	return (
		<nav className="navbar">
			<span className="navbar__logo">Marat Negimatzhanov</span>
			<ul className="navbar__list">
				{navbarLinks.map(item => {
					return(
						<li className="navbar__item" key={item.title}>
							<a className="navbar__link" href={item.url}></a>
							{item.title}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar
