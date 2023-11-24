import styled from 'styled-components'

export const StyledFooter = styled.div`
	height: 80px;
	width:100%;
	background-color: ${(props) => props.theme.navColor};
	display:flex;
	justify-content:center;
	align-items:center;
	margin-top: 500px;

`

export const GitHubLink = styled.a`
	width:180px;
	margin-right:10px;
	font-size:1em;
	color:white;
	text-decoration:none;
	display:flex;
	justify-content:space-between;
	align-items:center;
`
