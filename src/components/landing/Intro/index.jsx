import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import { Flex } from 'components/theme/Footer/styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Lars, a Full Stack Webdeveloper based in Japan</h4>
				<div style={{display: "flex"}}>
					<Button as={AnchorLink} href="#contact" style={{color: "white", boxShadow: "rgb(185, 185, 185) 0px 13px 19px -6px", backgroundColor: "#707070"}}>
						View Resume
					</Button>
					<Button as={AnchorLink} href="#contact" style={{marginLeft: "1rem"}}>
						Get In Touch
					</Button>
				</div>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Lars and I’m a Freelance Webdeveloper" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
