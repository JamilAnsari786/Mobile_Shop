import React from 'react';
import './MobileBrand.css';
import { iphone_list } from '../../../assets/assets';

const MobileBrand = ({ brand, setBrand }) => {
  const categories = ['All', ...new Set(iphone_list.map(item => item.category))];

  return (
    <div className="mobile-brand" id="mobile-brand">
      <h1>Explore by Brand</h1>
      <p className="mobile-brand-text">
        Choose your favorite mobile brand and explore top models, specs, and prices.
      </p>

      <div className="mobile-brand-list">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setBrand(prev => (prev === item ? 'All' : item))}
            className={`mobile-brand-list-item ${brand === item ? 'active' : ''}`}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default MobileBrand;
