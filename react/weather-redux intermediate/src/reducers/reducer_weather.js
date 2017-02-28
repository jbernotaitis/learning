import { FETCH_WATHER } from '../actions'

export default function(state = [], action){
	//console.log("action received", action);

	switch(action.type){
		case FETCH_WATHER:
			return [action.payload.data, ...state]
		break;

	}
	return state;
}