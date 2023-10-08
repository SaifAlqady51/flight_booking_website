import { citiesList } from '../../TopThousandCity';

export const filterCitiesList = (value: string) => {
    if (value === '') {
        return [];
    }

    const result = citiesList.filter((cityName: string) => {
        return cityName.startsWith(value);
    });


    return result;
};
