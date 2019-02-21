import { ADD_TO_PARAGRAPH, RESET_PARAGRAPH } from '../actions//types';


export default (state = [], action) => {
    switch(action.type) {
        case ADD_TO_PARAGRAPH:
            return [...state, action.payload]
        case RESET_PARAGRAPH:
            return state.filter(element => element === null)
        default: 
            return state;
    }
}