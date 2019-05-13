import {FIXED} from "../../constants/reduxConsts";

export const makeFixed = (id) => {
    return {
        type: FIXED,
        id
    }
};