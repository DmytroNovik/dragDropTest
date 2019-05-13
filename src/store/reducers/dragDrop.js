import {FIXED} from '../../constants/reduxConsts';

const initialState = {
    available: [
        {id: 'startTime', name: 'Start Time'},
        {id: 'stopTime', name: 'Stop Time'},
        {id: 'perPoint', name: 'Per Point'},
        {id: 'initialMargin', name: 'Initial Margin'},
        {id: 'change%', name: 'Change %'},
        {id: 'change', name: 'Change'},
        {id: 'last', name: 'Last'},
        {id: 'lastVolume', name: 'Last Volume'},
        {id: 'bid', name: 'Bid'},
        {id: 'bidSize', name: 'Bid Size'},
        {id: 'ask', name: 'Ask'},
        {id: 'askSize', name: 'Ask Size'},
        {id: 'totalVolume', name: 'Total Volume'},
        {id: 'high', name: 'High'},
    ],
    visible: [],
    fixed: []

};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIXED: {
            return {...state,
                fixed: state.fixed.find(item => item.id === action.id) === undefined ?
                    [...state.fixed, state.available.find(item => item.id === action.id)] :
                        state.fixed.filter(item => item.id !== action.id)
            }
        }
        default:
            return state;
    }
}