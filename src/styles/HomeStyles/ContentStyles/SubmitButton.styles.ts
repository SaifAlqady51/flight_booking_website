import styled from 'styled-components';


export const SubmitButton = styled.input`
	width:150px;
	height:45px;
	background-color: #10002b;
	color:white;
	border:none;
	border-radius:20px;
	font-size:18px;

	@media (max-width:1100px){
		width:120px
	}

	@media (max-width:800px){
		width:80%;
	}
`
