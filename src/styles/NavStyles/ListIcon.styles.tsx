import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { JSX } from 'react';

interface ProviderProps {
    className?: string;
    children: JSX.Element;
}

const Provider = ({ className, children }: ProviderProps) => (
    <IconContext.Provider value={{ className }}>
        {children}
    </IconContext.Provider>
);

export const StyledIcon = styled(Provider)`
    width: 40px;
    height: 40px;
    color: white;
    display: none;
    padding-right: 10px;

    @media (max-width: 750px) {
        display: flex;
        flex-shrink: 0;
        padding-left: 15px;
    }
`;

export const SmallStyledIcon = styled(Provider)`
    width: 40px;
    height: 40px;
    color: white;
    padding-right: 10px;
`;
export const CheckIconProvider = styled(Provider)`
    width: 25px;
    height: 15px;
    color: #55a630;
`;

export const DollarIconProvider = styled(Provider)<{$priceValue: number}>`
    width: 30px;
    height: inherit;
	position:absolute;
	left:${(props) => props.$priceValue < 9? '54px' : '45px'};
	bottom:10px;


`;
