import {SAVE_SELECTED_TRIP} from "../actions/actionTypes";
import initialState from './initialState';

export default function rootReducer(state = initialState, action) {
	switch ( action.type ) {
		case SAVE_SELECTED_TRIP:
			console.log("hi");
			console.log("new state: ");
			console.log( 
				{
				...state,
				driver_selected_trip: action.payload
			}
				);
			return {
				...state,
				driver_selected_trip: action.payload
			};
		default:
			return state;
	}
}