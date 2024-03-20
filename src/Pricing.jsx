import React from 'react';

const Pricing = () => {
  return (
    <div>
      <h1>Our Pricing Plans</h1>
      
      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p>$9.99/month</p>
          <button>Choose Basic</button>
        </div>
        
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p>$29.99/month</p>
          <button>Choose Standard</button>
        </div>
        
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p>$49.99/month</p>
          <button>Choose Premium</button>
        </div>
      </div>
      
    </div>
  );
};

export default Pricing;
