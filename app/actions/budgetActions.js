import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const createBook = (book) => {
//   return {
//     type: actionTypes.CREATE_BOOK,
//     book
//   }
// };

export const fetchItemsSuccess = (items) => {
  return {
    type: actionTypes.GET_ITEMS_SUCCESS,
    items
  }
};

export const createItemSuccess = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    item
  }
};


export const fetchItems = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchItemsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBudgetItem = (item) => {
  return (dispatch) => {
    return Axios.post(apiUrl, item)
      .then(response => {
        dispatch(createItemSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



