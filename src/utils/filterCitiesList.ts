import { citiesList } from '../../CitiesList';

export const filterCitiesList = (value: string) => {
    if (value === '') {
        return [];
    }

    const result = citiesList.filter((cityName: string) => {
        return cityName.startsWith(value);
    });

    return result;
};
