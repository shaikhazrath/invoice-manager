import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteInvoice, viewInvoice, updateViewInvoice } from '../actions';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  const { invoices } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  const handleDeleteInvoice = (index) => {
    dispatch(deleteInvoice(index));
  };

  const handleViewInvoice = (index) => {
    dispatch(viewInvoice(index));
  };

  const handleUpdateInvoice = (index) => {
    dispatch(updateViewInvoice(index));
  };

  return (
    <div className="container">
      {invoices.map((invoice, index) => (
        <div key={index}>
          <h1>Invoice #{invoice.invoiceNumber}</h1>

          <p>currentDate: {invoice.currentDate}</p>

          <p>dateOfIssue: {invoice.dateOfIssue}</p>

          <p>billFrom: {invoice.billFrom}</p>

          <p>total: {invoice.total}</p>
          <button onClick={() => handleDeleteInvoice(invoice.invoiceNumber)}>Delete</button>
          <Link onClick={() => handleViewInvoice(invoice.invoiceNumber)} to="/view">
            View
          </Link>
          <Link onClick={() => handleUpdateInvoice(invoice.invoiceNumber)} to="/update">
            Update
          </Link>
        </div>
      ))}
      <Link to="/invoice-form">Invoice Form</Link>
    </div>
  );
};

export default Home;
