/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { iphone_list } from '../../../assets/assets';
// import MobileBrand from '../mobilebrand/MobileBrand';
import { StoreContext } from '@/components/context/StoreContext';
import './Mobiles.css';
import toast from 'react-hot-toast';
import { auth } from '../../../firebase/firebaseConfig.js'; // ✅ Firebase
import { useNavigate } from 'react-router-dom';

const Mobiles = () => {
  const [brand, setBrand] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const { cartItems, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Filter by brand
  const filteredMobiles =
    brand === 'All'
      ? iphone_list
      : iphone_list.filter((item) => item.category === brand);

  const mobilesToShow = showAll ? filteredMobiles : filteredMobiles.slice(0, 10);

  // Only add to cart if logged in
  const handleAddToCart = (item) => {
    if (!auth.currentUser) {
      toast.error("⚠ Please login to add items to cart");
      navigate("/login");
      return;
    }

    addToCart(item);
    toast.success(`${item.name} added to cart ✅`);
  };

  return (
    <div className="mobiles-container">
      {/* Optional sidebar for brand filter */}
      {/* <aside className="sidebar open">
        <MobileBrand brand={brand} setBrand={setBrand} />
      </aside> */}

      <main className="main-content">
        <div className="header">
          <h1>Mobile Products</h1>
        </div>

        <div className="products-grid">
          {mobilesToShow.map((item) => {
            const inCartQty = cartItems[item.id]?.quantity || 0;

            return (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">₹{item.price}</p>
                  <p className="meta">
                    <strong>Storage:</strong> {item.storageOptions.join(', ')}
                  </p>
                  <p className="meta">
                    <strong>Colors:</strong> {item.colors.join(', ')}
                  </p>
                </div>
                <button
                  className="details-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {filteredMobiles.length > 10 && !showAll && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => setShowAll(true)}
            >
              Show More Mobiles
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Mobiles;
