import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {motion} from 'framer-motion';

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
    @media  (max-width:500px){
        width:25px;
        height:25px;

    }

`

export const ListIconContainer = styled(motion.div)`

    width:30px;
    height:30px;
    color:white;
    flex-shrink: 0;
    @media  (max-width:500px){
        width:25px;
        height:25px;
    }


`