import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import Home from './components/home';
import Views from './components/viewInvoice';
import Update from './components/update';

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoice-form" element={<InvoiceForm />} />
            <Route path="/view" element={<Views />} />
            <Route path="/update" element={<Update/>} />



          </Routes>
        </Router>
      </Container>
    </div>
  );
};

export default App;
