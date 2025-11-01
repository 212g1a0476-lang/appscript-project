import React, { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">₹{product.price}</p>
        <p className="product-category">{product.category}</p>
      </div>
    );
  }
}

export default ProductCard;
