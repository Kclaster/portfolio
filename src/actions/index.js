import { Contact } from "../config/firebase";
import { SHOW_SIDEBAR, HIDE_SIDEBAR, ADD_TO_PARAGRAPH, RESET_PARAGRAPH, ITERATOR, RESET_ITERATOR } from './types';


export const addContact = newContact => async dispatch => {
    Contact.push().set(newContact);
  };


  export const showSidebar = () => {
    return {
      type: SHOW_SIDEBAR,
    } 
    
  }

  export const hideSidebar = () => {
    return {
      type: HIDE_SIDEBAR,
    } 
    
  }

  export const addToParagraph = (action) => {
    return {
      type: ADD_TO_PARAGRAPH,
      payload: action
    }
  }

  export const resetParagraph = () => {
    return {
      type: RESET_PARAGRAPH
    }
  }

  export const addToIterator = () => {
    return {
      type: ITERATOR
    }
  }

  export const resetIterator = () => {
    return {
      type: RESET_ITERATOR
    }
  }

