import styled from 'styled-components'
import {IconContext} from 'react-icons'

interface ProviderProps {
    className?: string,
    children: JSX.Element,
}


const Provider = ({className,children}:ProviderProps) => <IconContext.Provider value={{className}} >{children}</IconContext.Provider>;

export const StyledThemeToggler = styled(Provider)`
    width:30px;
    height:30px;
    color:white;
    flex-shrink: 0;
    -webkit-transition: -webkit-transform .5s;
    &:active {
        -webkit-transform: rotate(360deg);
    }
    @media  (max-width:500px){
        width:25px;
        height:25px;
        -webkit-transition: -webkit-transform .5s;


    }

`