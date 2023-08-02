import styled from 'styled-components';
import motion from 'framer-motion';

export const MainDiv = styled.div`
    height:400px;
    width:80%;
    display:flex;
    margin:200px auto;

    @media (max-width:640px){
        margin:200px auto 50px ;
    }

`
export const ChildDiv = styled.div`
    height:inherit;
    width:100%;
    display:flex;
    justify-content: space-evenly;

    @media (max-width:640px){
        flex-direction: column;
        align-items: center;
        justify-content:center
    }

`

interface GarndChildDivProps {
    text?:boolean,
    width: string,
    justify?:string,
    align?:string,
    order?:string
}

export const GrandChildDiv = styled.div<GarndChildDivProps>`
    height:inherit;
    width:${(props) => props.width};
    display:flex;
    flex-direction: ${(props) => props.text? 'column': 'raw'};
    justify-content: ${(props) => props.justify} ;
    align-items: ${(props) => props.align};

    @media (max-width:640px){
        justify-content: center;
        width:80%;
        order: ${(props) => props.order};
    }

`