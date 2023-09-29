import { FC } from 'react';

import { SearchResultText, SearchResultTextResult } from '@/styles/Text.styles';

interface FlightTextProps {
    constText: string;
    varText: string;
}

const FlightText: FC<FlightTextProps> = ({ constText, varText }) => {
    return (
        <>
            <SearchResultText>
                {constText} :{' '}
                <SearchResultTextResult>{varText}</SearchResultTextResult>
            </SearchResultText>
        </>
    );
};

export default FlightText;
