import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addInvoice,deleteInvoice } from '../actions';
import { Link } from 'react-router-dom';
const Update = () => {
    const dispatch = useDispatch();
    const invoice = useSelector((state) => state.invoice.updateInvoice);
    // Define initial state for form fields
    const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: invoice.invoiceNumber || '',

      isOpen: invoice.isOpen || '',
      currency: invoice.currency || '',
      dateOfIssue: invoice.dateOfIssue || '',
      billTo: invoice.billTo || '',
      billToEmail: invoice.billToEmail || '',
      billToAddress: invoice.billToAddress || '',
      billFrom: invoice.billFrom || '',
      billFromEmail: invoice.billFromEmail || '',
      billFromAddress: invoice.billFromAddress || '',
      notes: invoice.notes || '',
      total: invoice.total || '',
      subTotal: invoice.subTotal || '',
      taxAmount: invoice.taxAmount || '',
      discountRate: invoice.discountRate || '',
      discountAmount: invoice.discountAmount || '',
      items: invoice.items || [],
    });
  
    // Handle form field changes
    const handleInputChange = (e) => {
      setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
    };
  
    // Handle adding an item
    const handleAddItem = () => {
      setInvoiceData({
        ...invoiceData,
        items: [...invoiceData.items, { name: '', description: '', price: '', quantity: '' }],
      });
    };
  
    // Handle item field changes
    const handleItemChange = (e, index) => {
      const { name, value } = e.target;
      const items = [...invoiceData.items];
      items[index][name] = value;
      setInvoiceData({ ...invoiceData, items });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(deleteInvoice( invoice.invoiceNumber ));

      dispatch(addInvoice(invoiceData));
      // Reset form fields or redirect to another page if needed
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>View Invoice</h1>
          <h1>Invoice #{invoiceData.invoiceNumber}</h1>
          <p>
            isOpen:
            <input type="text" name="isOpen" value={invoiceData.isOpen} onChange={handleInputChange} />
          </p>
          <p>
            currency:
            <input type="text" name="currency" value={invoiceData.currency} onChange={handleInputChange} />
          </p>
          <p>
            dateOfIssue:
            <input type="text" name="dateOfIssue" value={invoiceData.dateOfIssue} onChange={handleInputChange} />
          </p>
          <p>
            billTo:
            <input type="text" name="billTo" value={invoiceData.billTo} onChange={handleInputChange} />
          </p>
          <p>
            billToEmail:
            <input type="text" name="billToEmail" value={invoiceData.billToEmail} onChange={handleInputChange} />
          </p>
          <p>
            billToAddress:
            <input type="text" name="billToAddress" value={invoiceData.billToAddress} onChange={handleInputChange} />
          </p>
          <p>
            billFrom:
            <input type="text" name="billFrom" value={invoiceData.billFrom} onChange={handleInputChange} />
          </p>
          <p>
            billFromEmail:
            <input type="text" name="billFromEmail" value={invoiceData.billFromEmail} onChange={handleInputChange} />
          </p>
          <p>
            billFromAddress:
            <input type="text" name="billFromAddress" value={invoiceData.billFromAddress} onChange={handleInputChange} />
          </p>
          <p>
            notes:
            <input type="text" name="notes" value={invoiceData.notes} onChange={handleInputChange} />
          </p>
          <p>
            total:
            <input type="text" name="total" value={invoiceData.total} onChange={handleInputChange} />
          </p>
          <p>
            subTotal:
            <input type="text" name="subTotal" value={invoiceData.subTotal} onChange={handleInputChange} />
          </p>
          <p>
            taxAmount:
            <input type="text" name="taxAmount" value={invoiceData.taxAmount} onChange={handleInputChange} />
          </p>
          <p>
            discountRate:
            <input type="text" name="discountRate" value={invoiceData.discountRate} onChange={handleInputChange} />
          </p>
          <p>
            discountAmount:
            <input type="text" name="discountAmount" value={invoiceData.discountAmount} onChange={handleInputChange} />
          </p>
  
          {invoiceData.items.map((item, index) => (
            <React.Fragment key={index}>
              <p>
                name:
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </p>
              <p>
                description:
                <input
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </p>
              <p>
                price:
                <input
                  type="text"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </p>
              <p>
                quantity:
                <input
                  type="text"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </p>
            </React.Fragment>
          ))}
  
          <button type="button" onClick={handleAddItem}>Add Item</button>
          <button type="submit">Submit</button>
        </form>
  
        <Link to="/">Home</Link>
      </div>
    );
  };
  
  export default Update;
  