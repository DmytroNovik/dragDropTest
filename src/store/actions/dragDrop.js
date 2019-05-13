import {DRAG, DROP, FIXED} from "../../constants/reduxConsts";

export const onDrag = (columnOwner, column) => {
    return {
        type: DRAG,
        columnOwner,
        column
    }
};

export const onDrop = () => {
    return {type: DROP}
};

export const makeFixed = (id) => {
    return {
        type: FIXED,
        id
    }
};