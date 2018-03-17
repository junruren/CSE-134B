import {SAVE_SELECTED_TRIP, SAVE_QUOTE, CHANGE_STEP} from "../actions/actionTypes";

import initialState from './initialState';

export default function rootReducer(state = initialState, action) {
	switch ( action.type ) {
		case SAVE_SELECTED_TRIP:
			// console.log("hi");
			// console.log("new state: ");
			// console.log(
			// 	{
			// 	...state,
			// 	driver_selected_trip: action.payload
			// }
			// 	);
			return {
				...state,
				driver_selected_trip: action.payload
			};
			break;
		case SAVE_QUOTE:
			return {
					...state,
					driver_quote: action.payload
				};
		case CHANGE_STEP:
			return Object.assign({}, state, {
				step: action.step
			});
		default:
			return state;
	}
}
