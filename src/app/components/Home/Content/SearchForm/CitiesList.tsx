import React from 'react';

const CitiesList = ({
    citiesList,
    label,
}: {
    citiesList: string[];
    label: string;
}) => {
    return (
        <datalist id={label}>
            {citiesList.map((value: any, index: any) => (
                <option key={index} value={value}></option>
            ))}
        </datalist>
    );
};

export default CitiesList;
