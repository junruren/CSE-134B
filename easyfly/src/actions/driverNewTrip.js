import { CHANGE_STEP } from "./actionTypes";

export const steps = {
	RIDE_SELECTION: 'RIDE_SELECTION',
	FLIGHT_INFO: 'FLIGHT_INFO',
	RIDE_INFO: 'RIDE_INFO',
	REVIEW: 'REVIEW',
}

export const changeStep = new_step => (
	{ type: CHANGE_STEP,
	  step: new_step
	}
);
