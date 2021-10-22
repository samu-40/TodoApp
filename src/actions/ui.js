import { types } from "../types/types";

export const clickBars = ( bool ) => ({

    type: types.clickBars,
    payload: bool

});

export const clickAdd = ( bool ) => ({

    type: types.clickAdd,
    payload: bool

});