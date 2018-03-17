import { SAVE_QUOTE } from "./actionTypes";

export const saveQuote = driver_quote => (
	{ type: SAVE_QUOTE,
	  payload: driver_quote
	}
);
