import React from 'react';

const Plans = () => {
  return (
    <section className="plans">
      <h2 className="plans__heading">Find the Perfect Plan for You</h2>
      <p className="plans__subtitle">
        Explore our range of plans designed to fit your needs. Whether you're just getting started or 
        looking for advanced features, we have a plan that’s right for you. Choose the one that suits you best 
        and unlock endless possibilities.
      </p>

      <div className="plans__container">
        
        {/* Basic Plan */}
        <div className="plans__card plans__card--basic">
          <h3 className="plans__card-title">Basic Plan</h3>
          <ul className="plans__features">
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
          <button className="plans__button">Choose</button>
        </div>

        {/* Premium Plan */}
        <div className="plans__card plans__card--premium">
          <h3 className="plans__card-title">Premium Plan</h3>
          <ul className="plans__features">
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
          <button className="plans__button">Choose</button>
        </div>

        {/* Custom Plan */}
        <div className="plans__card plans__card--custom">
          <h3 className="plans__card-title">Custom Plan</h3>
          <ul className="plans__features">
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
          <button className="plans__button">Choose</button>
        </div>

      </div>
    </section>
  );
};

export default Plans;
