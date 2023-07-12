import styled from 'styled-components'
import {IconContext} from 'react-icons'

interface ProviderProps {
    className?: string,
    children: JSX.Element
    toggle?:boolean
}


const Provider = ({className,children}:ProviderProps) => <IconContext.Provider value={{className}} >{children}</IconContext.Provider>;



export const ListIconContainer = styled(Provider)`
    width:40px;
    height:40px;
    /* @ts-ignore */
    color: ${({toggle}) => toggle? "white": "red"};
    display:none;
    padding-right:10px;
    @media (max-width:1000px){
        display:flex;
    }
`