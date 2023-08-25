import styled, {css} from 'styled-components';
import {IconContext} from 'react-icons';
import {motion} from 'framer-motion';

interface ProviderProps {
    className?: string,
    children: JSX.Element,
}


const Provider = ({className,children}:ProviderProps) => <IconContext.Provider value={{className}} >{children}</IconContext.Provider>;


const ListIconStyled = css`
	margin-right:40px;
	width:30px;
    height:30px;
    color:white;
    flex-shrink: 0;

	@media (max-width:1500px){
		margin-right:100px;
	}
	@media (max-width:750px){
		margin-right:20px;
	}

`
export const StyledThemeToggler = styled(Provider)`

	${ListIconStyled}
`

export const ListIconContainer = styled(motion.div)`
	${ListIconStyled}
`
