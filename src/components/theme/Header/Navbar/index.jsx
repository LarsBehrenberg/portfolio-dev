import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from 'assets/logo/logo.png'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/" style={{fontSize: "1.2em"}}>Lars Behrenberg</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
