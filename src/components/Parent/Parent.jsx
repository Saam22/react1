import React, { useState } from 'react';
import Child from '../Child/Child.jsx';

export default function Parent({ product }) {
  const [count, setCount] = useState(8);

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">
          Parent Count: <span className="badge bg-dark">{count}</span>
        </h2>

        <button
          className="btn btn-success"
          onClick={() => setCount(prev => prev + 1)}
        >
          + Increment Parent Count
        </button>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {product.map((item) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
            key={item.id}
          >
            <Child x={count} productdetailes={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
