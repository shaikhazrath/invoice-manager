// reducers.js
import {
  ADD_INVOICE,
  EDIT_INVOICE,
  VIEW_INVOICE,
  DELETE_INVOICE,
  UPDATE_VIEW_INVOICE
} from './actionTypes';

const initialState = {
  invoices: [],
  index:0
};

const invoiceReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload]
      };
      case DELETE_INVOICE:
        return {
          ...state,
          invoices: state.invoices.filter((invoice) => invoice.invoiceNumber !== action.payload)
        };
        case VIEW_INVOICE:
          return {
            ...state,
            viewedInvoice: state.invoices.find((invoice) => invoice.invoiceNumber === action.payload)
          };
          case   UPDATE_VIEW_INVOICE
          :
            return {
              ...state,
              updateInvoice: state.invoices.find((invoice) => invoice.invoiceNumber === action.payload)
            };
        
      

    default:
      return state;
  }
};

export default invoiceReducer;
