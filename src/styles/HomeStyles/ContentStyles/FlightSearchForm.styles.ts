'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion'; 
export const FlightSearchFormStyles = styled.form`
	margin-top:50px;
	width:80%;
	height:100px;
	display:flex;
	border-radius:15px;
	align-items:center;
	justify-content:space-around;
	background: ${(props) => props.theme.navColor };
`

export const SearchFieldContainer = styled.div`
	width:25%;
	position:relative;
`

export const StyledInput = styled.input`
	color:white;
	width:90%;
	height:30px;	
	padding:10px;
	border:1px solid #6247aa;
	border-radius:6px;
	background: inherit;
	font-size:1em;
	outline:none;



`


export const InputLabel = styled(motion.span)`
	position:absolute;
	left:5px;
	top:5px;
	padding:10px;
	color:white;
	pointer-events:none;
	font-size:1em;
	text-transform:uppercase;
	background:${(props) => props.theme.navColor };
`

