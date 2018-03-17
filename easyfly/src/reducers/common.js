import {SAVE_SELECTED_TRIP} from "../actions/actionTypes";
import {SAVE_QUOTE} from "../actions/actionTypes";

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
		default:
			return state;
	}
}