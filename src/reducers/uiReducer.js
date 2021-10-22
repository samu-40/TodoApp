import { types } from "../types/types";

const initState = {
    bars: {
        open: false
    },
    add: {
        open: false
    }
}

export const uiReducer = ( state = initState, action ) => {

    switch ( action.type ) {

        case types.clickBars:        
            return {
                ...state,
                bars: {
                    open: action.payload
                }
            };

        case types.clickAdd:
            return{
                ...state,
                add: {
                    open: action.payload
                }
            }
    
        default:
            return state;

    }

};