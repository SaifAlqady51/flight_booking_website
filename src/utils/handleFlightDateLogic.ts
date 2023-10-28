export const hanldeFlightDate = (flightDate: string) => {
    const flightDateType = new Date(flightDate);
    const currentDate = new Date();
    if (isNaN(flightDateType as unknown as number) || flightDate.length < 10) {
        return {
            status: false,
            message: `Invalid Date Fromat. Date should be in format YYYY-MM-DD `,
        };
    }
    if (flightDateType >= currentDate) {
        return { status: true, message: 'Ok' };
    }
    return {
        status: false,
        message: `Unfortunately, we cannot travel to the past `,
    };
};
