import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {...state, showSidebar: true}
        case HIDE_SIDEBAR:
            return {...state, showSidebar: false}
        default: 
            return state;
    }
}