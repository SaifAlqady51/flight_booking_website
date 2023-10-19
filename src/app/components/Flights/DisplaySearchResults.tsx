'use client';
import { useEffect } from 'react';
import SearchResult from '@components/Flights/SearchResult';
import { AllFlightCardsContainer } from '@/styles/FlightStyles/FlightCard.styles';
import { FlightCard } from '@components/Flights/FlightCard';
// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { pushSearchResult } from '@/redux/features/expandFlightCard-slice';

const DisplaySearchResults = ({ data }: { data: any }) => {
    const dispatch = useDispatch<AppDispatch>();

    const expandItemForEachSearchResult = (noOfSearchResult: number) => {
        dispatch(pushSearchResult(noOfSearchResult));
    };
    useEffect(() => {
        console.log(
            expandItemForEachSearchResult(
                data?.getSearchResultsForSpecificUser?.length,
            ),
        );
        expandItemForEachSearchResult(
            data?.getSearchResultsForSpecificUser?.length,
        );
    }, []);

    const AllSearchResults = () =>
        data.getSearchResultsForSpecificUser.map((searchResult: any) => (
            <>
                <SearchResult
                    key={searchResult.id}
                    location={searchResult.location.cityName}
                    distination={searchResult.distination.cityName}
                    flightDate={searchResult.flightDate}
                    numberOfAdults={searchResult.numberOfAdults}
                    travelClass={searchResult.travelClass}
                />

                {true ? (
                    <AllFlightCardsContainer>
                        {searchResult.flights.flightsList.map((flight: any) => (
                            <FlightCard
                                key={flight.id}
                                flightData={flight}
                            ></FlightCard>
                        ))}
                    </AllFlightCardsContainer>
                ) : (
                    <div></div>
                )}
            </>
        ));

    if (data) {
        return <AllSearchResults />;
    } else {
        return <h1>There is no Search Results for you</h1>;
    }
};

export default DisplaySearchResults;
