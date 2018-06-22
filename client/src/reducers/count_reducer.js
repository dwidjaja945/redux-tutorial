import types from '../actions/types';

const DEFAULT_STATE = {
    count : 0,
};

export default ( state=DEFAULT_STATE , action ) => {
    debugger;
    switch( action.type ) {
        case types.INCREMENT_COUNT: 
            return {
                ...state,
                count: action.payload
            };
        case types.DECREMENT_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default: 
            return state;
    }
}