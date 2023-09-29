"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    img: []
};
// export const fetchArilineLogo = createAsyncThunk(
//     'airlineLogo',
//     async (IATA: string) => {
//         const response = await axios.get(
//             `https://logo-api-pi.vercel.app/api?filename=${IATA}`,
//             { headers: { 'Access-Control-Allow-Origin': '*' } },
//         );
//         return response.data.img;
//     },
// );
var airlineLogo = (0, toolkit_1.createSlice)({
    name: 'airlineLogo',
    initialState: initialState,
    reducers: {
        add: function (state, action) {
            state.img.push(action.payload);
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchArilineLogo.pending, (state: initialStateType) => {
    //             state = state;
    //             state.loading = 'pending';
    //         })
    //         .addCase(
    //             fetchArilineLogo.fulfilled,
    //             (state: initialStateType, action: PayloadAction<any>) => {
    //                 state.img.push(action.payload);
    //                 state.loading = 'succeeded';
    //             },
    //         );
    // },
});
exports.add = airlineLogo.actions.add;
exports.default = airlineLogo.reducer;
