// actions.js
import {
  ADD_INVOICE,
  UPDATE_INVOICE,
  VIEW_INVOICE,
  DELETE_INVOICE,
  UPDATE_VIEW_INVOICE
} from './actionTypes';

export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice
});
export const deleteInvoice = (invoiceId) => (
  {
  type: DELETE_INVOICE,
  payload: invoiceId
});

export const viewInvoice = (invoiceId) => (
  {
  type: VIEW_INVOICE,
  payload: invoiceId
});


export const updateViewInvoice = (invoiceId) => ({
  type:   UPDATE_VIEW_INVOICE,
  payload: invoiceId
});