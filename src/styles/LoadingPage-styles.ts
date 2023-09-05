import styled, { css } from "styled-components";
import { motion } from "framer-motion"; 
import Image from 'next/image';
export const LoadingStyles = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: white;
`;


const AirPlaneEngine = css`
	width:200px;
	height:200px;
`

export const AirPlaneEngineImage = styled(Image)`
	${AirPlaneEngine}
`
export const AirPlaneImageContainer = styled(motion.div)`
	${AirPlaneEngine}
`
