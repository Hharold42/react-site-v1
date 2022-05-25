import React, {useState} from "react";
import './navbar.css'
import {FiMenu, FiX} from 'react-icons/fi'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({navbarLinks}) => {
	const [menuClicked, setMenuClicked] = useState(true);

	const toggleMenuClicked = () => {
		setMenuClicked(!menuClicked);
	}

	return (
		<nav className="navbar">
			<span className="navbar__logo">Marat Negimatzhanov</span>

			{menuClicked ? 
				(<FiMenu size={25} className="navbar__menu" onClick={toggleMenuClicked}/>)
				: 
				(<FiX size={25} className="navbar__menu" onClick={toggleMenuClicked}/>)
			}
			<ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>
				{navbarLinks.map(item => {
					if (item.title === "About"){
						return(
							<li className="navbar__item" key={item.title}>
								<a className="navbar__link" href={item.url}>
									<Link
										activeClass="active"
										to="about"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
									>{item.title}</Link>
								</a>
							</li>
						);
					}
					else if (item.title === "Home"){
						return(
							<li className="navbar__item" key={item.title}>
								<a className="navbar__link" href={item.url}>
									<Link
										activeClass="active"
										to="hero"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
									>{item.title}</Link>
								</a>
							</li>
						);
					}
					else if (item.title === "Links"){
						return(
							<li className="navbar__item" key={item.title}>
								<a className="navbar__link" href={item.url}>
									<Link
										activeClass="active"
										to="links"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
									>{item.title}</Link>
								</a>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}

export default Navbar
