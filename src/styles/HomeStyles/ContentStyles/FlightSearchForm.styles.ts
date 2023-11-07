'use client';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// styles for the flight search Form
export const FlightSearchFormStyles = styled.form`
    margin-top: 50px;
    width: 80%;
    height: 100px;
    display: flex;
    border-radius: 15px;
    align-items: center;
    justify-content: space-around;
	flex-shrink:0;
    background: ${(props) => props.theme.navColor};

    @media (max-width: 1700px) {
        height: 200px;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    @media (max-width: 1100px) {
        width: 90%;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        width: 60%;
        height: 500px;
        padding-top: 10px;
    }
`;

// styled containr each field
export const SearchFieldContainer = styled.div`
    width: 15%;
    position: relative;

    @media (max-width: 1700px) {
        width: 30%;
    }
    @media (max-width: 800px) {
        width: 80%;
        padding-top: 20px;
    }
`;

// common styles with input and select fields
export const FieldStyles = css`
    color: white;
    padding: 10px;
    width: 90%;
    border: 1px solid #6247aa;
    border-radius: 6px;
    background: inherit;
    font-size: 1.3em;
    outline: none;
`;

export const StyledInput = styled.input`
    ${FieldStyles}
    height:35px;
`;

export const StyledSelect = styled.select`
    ${FieldStyles}
    width:95%;
    height: 55px;
`;

// styles for the label of each field
export const InputLabel = styled(motion.span)`
    position: absolute;
    left: 5px;
    top: 5px;
    padding: 10px 10px 0 10px;
    color: white;
    pointer-events: none;
    font-size: 1.1em;
    text-transform: uppercase;
    background: ${(props) => props.theme.navColor};

    @media (max-width: 800px) {
        margin-top: 20px;
    }
`;
