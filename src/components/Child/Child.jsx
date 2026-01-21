import React from 'react'

export default function Child(props) {
    console.log(props); 
  return (
    <>Child Count:{props.x}
    <div className='bg-dark text-light p-3 w-25'>
        <h5>product id:{props.productdetailes.id}</h5>
        <h5>product name:{props.productdetailes.name}</h5>
        <h5>product price:{props.productdetailes.price}</h5>
        <h5>product category:{props.productdetailes.catagory}</h5>
        <h5>product isSale:{props.productdetailes.isSale.toString()}</h5>
        <h5>product stock:{props.productdetailes.stock}</h5>
    </div>

    
    </>

  )
}
