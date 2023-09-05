"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSearchForm = void 0;
var store_1 = require("@/redux/store");
var react_redux_1 = require("react-redux");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var FlightSearchForm_styles_1 = require("@styles/HomeStyles/ContentStyles/FlightSearchForm.styles");
var SearchField_1 = require("../SearchForm/SearchField");
var flightFormInputValues_slice_1 = require("@redux/features/flightFormInputValues-slice");
var getFlightOffer_1 = require("@server/controllers/getFlightOffer");
var SubmitButton_styles_1 = require("@styles/HomeStyles/ContentStyles/SubmitButton.styles");
var handleInputChanges_1 = require("@/utils/handleInputChanges");
//testing our reducers
//
var FlightSearchForm = function () {
    var router = (0, navigation_1.useRouter)();
    var flightFormInputValues = (0, store_1.useAppSelector)(function (state) { return state.flightFormInputValues; });
    var _a = (0, react_1.useState)(""), location = _a[0], setLocation = _a[1];
    var _b = (0, react_1.useState)(""), distination = _b[0], setDistination = _b[1];
    var _c = (0, react_1.useState)(""), flightDate = _c[0], setFlightDate = _c[1];
    console.log(location, distination, flightDate);
    (0, getFlightOffer_1.useFindFlightSearch)();
    var flightData = (0, store_1.useAppSelector)(function (state) { return state.flightData.flights; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleSumbit = function (e) {
        e.preventDefault();
        dispatch((0, flightFormInputValues_slice_1.changeFormValue)({ location: location, distination: distination, flightDate: flightDate }));
        router.replace("/flights");
    };
    return (<FlightSearchForm_styles_1.FlightSearchFormStyles onSubmit={handleSumbit}>
			<SearchField_1.SearchField labelOfInputField="location" handleChange={function (e) { return (0, handleInputChanges_1.handleChange)(e, setLocation); }}/>
			<SearchField_1.SearchField labelOfInputField="distination" handleChange={function (e) { return (0, handleInputChanges_1.handleChange)(e, setDistination); }}/>
			<SearchField_1.SearchField labelOfInputField="flight date" handleChange={function (e) { return (0, handleInputChanges_1.handleChange)(e, setFlightDate); }}/>
			<SubmitButton_styles_1.SubmitButton type="submit" value="Submit"/>
		</FlightSearchForm_styles_1.FlightSearchFormStyles>);
};
exports.FlightSearchForm = FlightSearchForm;
