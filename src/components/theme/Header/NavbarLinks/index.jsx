import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/" activeClassName="isActive">Home</Link>
		<Link to="/about" activeClassName="isActive">About</Link>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
