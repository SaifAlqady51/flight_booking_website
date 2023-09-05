"use client";
import axios from "axios";
import { getAmadeusKey } from "../utils/getAmadeusKey";
import { useEffect } from "react";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { fetchedFlightData } from "@/redux/features/flightData-slice";

export async function useFindFlightSearch() {
	const { location, distination, flightDate } = useAppSelector(
		(state) => state.flightFormInputValues
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if(location.length === 3 && distination.length === 3 && flightDate.length === 10){
			dispatch(fetchedFlightData({ location, distination, flightDate }));
		}
	}, [location,distination,flightDate]);
	
}


