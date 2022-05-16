import React, {useState} from "react";
import './navbar.css'
import {FiMenu, FiX, Fix} from 'react-icons/fi'

const Navbar = ({navbarLinks}) => {
	const [menuClicked, setMenuClicked] = useState(false)

	const toggleMenuClicked = () => {
		setMenuClicked(!menuClicked);
	}

	return (
		<nav className="navbar">
			<span className="navbar__logo">Marat Negimatzhanov</span>

			{menuClicked ? 
				(<FiX size={25} className="navbar__menu" onClick={toggleMenuClicked}/>)
				: 
				(<FiMenu size={25} className="navbar__menu" onClick={toggleMenuClicked}/>)
			}
			<ul className="navbar__list">
				{navbarLinks.map(item => {
					return(
						<li className="navbar__item" key={item.title}>
							<a className="navbar__link" href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar
