import styled from 'styled-components'
import {IconContext} from 'react-icons'

interface ProviderProps {
    className?: string,
    children: JSX.Element
    open?:boolean
}

interface ProviderWrapper {
    $show:boolean
}

const Provider = ({className, children}:ProviderProps) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;



export const IconContainer = styled(Provider)`
    width:40px;
    height:40px;
    /* @ts-ignore */
    color: white;
    display:none;
    padding-right:10px;
    @media (max-width:1000px){
        display:flex;
    }
`