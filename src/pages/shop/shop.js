import React from "react";
import { ITEMS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>

      <div className="products">
        {ITEMS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
