import { styled } from "styled-components";

export const AlertStyles = styled.dialog`
	top: 500px;
	width: 800px;
	height: 70px;
	color: white;
	background-color: #7a0045 ;
	display:flex;
	border:0;
	border-radius: 10px;
	justify-content:space-between;
	align-items:center;
	font-size: 10px;
	z-index:10;

	@media (max-width:1200px){
		width: 600px;
		font-size:8px;

	}
	@media (max-width:750px){
		flex-direction:column;
		height: 160px;
		width:300px;
		font-size:12px;
	}
`

export const AlertText = styled.h1`
	@media (max-width:750px){
		height:70%;
	}

`
