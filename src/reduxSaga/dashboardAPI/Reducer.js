import { SET_HOMEPAGE } from "../ActionTypes"



const INITIAL_STATE = {
    homeSlider: [],
}




export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_HOMEPAGE:
            return {
                ...state,
                homeSlider: payload.homeSlider || [],
            };

        
        default: return state;
    }
}