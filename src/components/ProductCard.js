import React from 'react';
import './ProductCard.css';
import R from "../images/header 2.JPG"
import Price from "../images/Price.JPG"

const ProductCard = () => {
    const products = [
        { id: 1, prize: '1st', image: {Price}, price: '₹79900.00' },
        { id: 2, prize: '2nd', image: {Price}, price: '₹79900.00' },
        { id: 3, prize: '3rd', image: {Price}, price: '₹79900.00' },
        { id: 4, prize: '4th', image: {Price}, price: '₹79900.00' },
    ];

    return (
        <div className="giveaway-products">
            <div className="heading">
                <h2>Excited Giveaway Products</h2>
                <p>Enter bonus draw for a chance to win</p>
            </div>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={Price} alt={`Product ${product.id}`} />
                            <div className="prize-badge">{product.prize} Prize</div>
                        </div>
                        <div className="product-price">
                            <div className="medal-icon">
                                <img src={R} alt="Medal" />
                            </div>
                            <span>{product.price}</span>
                        </div>
                        <div className="product-name">Product Name</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;

