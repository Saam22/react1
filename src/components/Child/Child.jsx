import React from 'react'

export default function Child(props) {
    console.log(props); 
    let {id,name,price,catagory,isSale,stock}=props.productdetailes
  return (
    <>Child Count:{props.x}
    <div className='bg-dark text-light p-3 '>
        <h5>product id:{props.productdetailes.id}</h5>
        <h5>product name:{props.productdetailes.name}</h5>
        <h5>product price:{props.productdetailes.price}</h5>
        <h5>product category:{props.productdetailes.catagory}</h5>
        <h5>product isSale:{props.productdetailes.isSale.toString()}</h5>
        <h5>product stock:{props.productdetailes.stock}</h5>
        <h5>product id:{id}</h5>
        <h5>product name:{name}</h5>
        <h5>product price:{price}</h5>
        <h5>product category:{catagory}</h5>
        <h5>product isSale:{isSale.toString()}</h5>
        <h5>product stock:{stock}</h5>

    </div>
        <h4 className="mb-3">Child Count: {props.x}</h4>

      <div className="card bg-dark text-light ">
        <div className="card-body">
          <h5 className="card-title text-warning">{name}</h5>

          <p className="card-text mb-1">
            <strong>ID:</strong> {id}
          </p>

          <p className="card-text mb-1">
            <strong>Category:</strong> {catagory}
          </p>

          <p className="card-text mb-1">
            <strong>Price:</strong> ${price}
          </p>

          <p className="card-text mb-1">
            <strong>Stock:</strong> {stock}
          </p>

          <span
            className={`badge ${isSale ? 'bg-success' : 'bg-secondary'}`}
          >
            {isSale ? 'On Sale' : 'Not on Sale'}
          </span>
        </div>
      </div>
    
    </>

  )
}
