import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Views = () => {
  const invoice = useSelector((state) => state.invoice.viewedInvoice);
  

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>View Invoice</h1>
      <h1>Invoice #{invoice.invoiceNumber}</h1>
      <p>isOpen: {invoice.isOpen}</p>
      <p>currency: {invoice.currency}</p>
      <p>dateOfIssue: {invoice.dateOfIssue}</p>
      <p>billTo: {invoice.billTo}</p>
      <p>billToEmail: {invoice.billToEmail}</p>
      <p>billToAddress: {invoice.billToAddress}</p>
      <p>billFrom: {invoice.billFrom}</p>
      <p>billFromEmail: {invoice.billFromEmail}</p>
      <p>billFromAddress: {invoice.billFromAddress}</p>
      <p>notes: {invoice.notes}</p>
      <p>total: {invoice.total}</p>
      <p>subTotal: {invoice.subTotal}</p>
      <p>taxAmmount: {invoice.taxAmmount}</p>
      <p>discountRate: {invoice.discountRate}</p>
      <p>discountAmmount: {invoice.discountAmmount}</p>

      {invoice.items.map((item) => (
        <>
      <p>name: {item.name}</p>
      <p>description: {item.description}</p>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>


        </>
      ))}


      <Link to="/">Home</Link>
    </div>
  );
};

export default Views;
