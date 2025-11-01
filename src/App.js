import React, { Component } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { products, loading, error } = this.state;

    if (loading) return <h2 className="status-text">Loading products...</h2>;
    if (error) return <h2 className="status-text">Error: {error}</h2>;

    return (
      <div className="app-container">
        <header className="header">
          <h1>Appscrip Product Listing Page</h1>
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
