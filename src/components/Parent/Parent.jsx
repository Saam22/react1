import React, { useState } from 'react';
import Child from '../Child/Child.jsx';

export default function Parent() {
  const [count, setCount] = useState(8);
  const [product] = useState([
    { id: 1, name: 'Laptop', price: 45000, catagory: 'Electronics', isSale: false, stock: 5 },
    { id: 2, name: 'Mobile', price: 25000, catagory: 'Electronics', isSale: true, stock: 10 },
    { id: 3, name: 'Headphone', price: 5000, catagory: 'Accessories', isSale: true, stock: 15 },
    { id: 4, name: 'Shoes', price: 3000, catagory: 'Fashion', isSale: false, stock: 20 },
    { id: 5, name: 'Watch', price: 7000, catagory: 'Accessories', isSale: true, stock: 8 },
    { id: 6, name: 'Bag', price: 4000, catagory: 'Fashion', isSale: false, stock: 12 },
    { id: 7, name: 'Tablet', price: 20000, catagory: 'Electronics', isSale: true, stock: 7 },
    { id: 8, name: 'Camera', price: 15000, catagory: 'Electronics', isSale: false, stock: 4 },
    { id: 9, name: 'Printer', price: 8000, catagory: 'Electronics', isSale: true, stock: 6 },
    { id: 10, name: 'Monitor', price: 12000, catagory: 'Electronics', isSale: false, stock: 9 },
    { id: 11, name: 'Keyboard', price: 3000, catagory: 'Accessories', isSale: true, stock: 14 },
    { id: 12, name: 'Mouse', price: 1500, catagory: 'Accessories', isSale: false, stock: 18 },
    { id: 13, name: 'Speakers', price: 6000, catagory: 'Electronics', isSale: true, stock: 11 },
    { id: 14, name: 'Microphone', price: 4000, catagory: 'Electronics', isSale: false, stock: 13 },
    { id: 15, name: 'Charger', price: 2000, catagory: 'Accessories', isSale: true, stock: 16 },
  ]);

  return (
    <>
      <div className="container my-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-primary">
            Parent Count: <span className="badge bg-dark">{count}</span>
          </h2>

          <button
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
          >
            + Increment Parent Count
          </button>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {product.map((item) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <Child x={count} productdetailes={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
