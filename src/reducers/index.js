import { combineReducers } from 'redux';
import showSidebar from './showSidebar';
import addToParagraph from './addToParagraph';
import iterator from './iterator';


export default combineReducers({
    showSidebar,
    addToParagraph,
    iterator
})