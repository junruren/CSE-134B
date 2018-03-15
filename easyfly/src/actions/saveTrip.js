import { SAVE_SELECTED_TRIP } from "./actionTypes";

export const saveTrip = selected_trip => (
	{ type: SAVE_SELECTED_TRIP,
	  payload: selected_trip
	}
);
