"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIATACode = exports.handleSelectChange = exports.handleInputChange = void 0;
// handle input filed changes 
var handleInputChange = function (e, setChange) {
    setChange(e.target.value);
};
exports.handleInputChange = handleInputChange;
//handl select field changes
var handleSelectChange = function (e, setChange) {
    setChange(e.target.value);
};
exports.handleSelectChange = handleSelectChange;
// convert city name to IATA code 
var makeIATACode = function (city) {
    return city.slice(0, 3).toUpperCase();
};
exports.makeIATACode = makeIATACode;
