import { ITERATOR, RESET_ITERATOR } from '../actions/types';

export default (state = 0, action) => {
    switch(action.type) {
        case ITERATOR: 
            return state += 1;
        case RESET_ITERATOR:
            return state = 0;
        default: 
            return state;
    }
}