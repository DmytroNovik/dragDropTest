import {DRAG, FIXED} from "../../constants/reduxConsts";

export const onDrag = (columnOwner, column) => {
    return {
        type: DRAG,
        columnOwner,
        column
    }
};

export const makeFixed = (id) => {
    return {
        type: FIXED,
        id
    }
};