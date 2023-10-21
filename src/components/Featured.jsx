import React from "react";
import "../styles/Featured.css";

const Products = (props) => {
  return (
    <div className="product">
      <div className="image-section">
        <div className="image">
          <div className="more">Learn More</div>
        </div>
      </div>
      <div className="product-description">
        <em>{props.subtitle}</em>
        <div className="product-link">
          <a href="#home">{props.title}</a>
        </div>
        <div className="product-info">{props.desc}</div>
      </div>
    </div>
  );
};
function Featured() {
  return (
    <div className="featured-container">
      <div className="container-header">
        <h2>Featured Products</h2>
        <div className="content-link">
          <a className="link-underline" href="#home">
            View All
          </a>
        </div>
      </div>
      <div className="featured-content">
        <div className="products">
          <Products subtitle="Essential for Women/Men" title="Product Title" desc="[Brief description]" />
          <Products subtitle="Essential for Women/Men" title="Product Title" desc="[Brief description]" />
          <Products subtitle="Essential for Women/Men" title="Product Title" desc="[Brief description]" />
          <Products subtitle="Essential for Women/Men" title="Product Title" desc="[Brief description]" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
