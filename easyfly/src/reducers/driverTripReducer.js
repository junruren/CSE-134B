import {SAVE_SELECTED_TRIP} from "../actions/actionTypes"

export default function rootReducer(state, action) {
	switch ( action.type ) {
		case SAVE_SELECTED_TRIP:
			return state;
		default:
			return state;
	}
}