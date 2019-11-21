import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="credit-card">
        <h1 className="credit-card-title">CREDIT CARD</h1>
        <div className="credit-card-chip" />
          <img className="credit-card-chip" src="https://previews.123rf.com/images/alancotton/alancotton1511/alancotton151100211/48042691-closeup-of-a-credit-card-chip.jpg"/>
        <div className="credit-card-content">
          <div className="credit-card-text">
              <h2 className="credit-card-number">
                7253 3256 7895 1245
              </h2>
              <h6>VALID<br/>THRUE</h6>
              <h6 className="credit-card-valid-thru">MONTH/YEAR</h6>
              <h2>5422</h2>
              <h2 className="credit-card-valid-thru">
                11/50
              </h2>
              <h2 className="credit-card-holder-name">
                CARDHOLDER
              </h2>
          </div>
          <div className="credit-card-logo">
            <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"/>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
