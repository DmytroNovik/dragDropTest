import {DRAG, FIXED} from "../../constants/reduxConsts";

export const onDrag = (columnOwner, column) => {
    return {
        type: DRAG,
        columnOwner,
        column
    }
};

export const makeFixed = (index, id) => {
    return {
        type: FIXED,
        index,
        id
    }
};