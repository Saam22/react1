import React, { useState } from 'react';
import Child from '../Child/Child.jsx';
export default function Parent() {

  const [count, setCount] = useState(8);
  const [product, setProduct] = useState(
    {id: 1,name:'Laptop', price:45000 , catagory:'Electronics' ,isSale: false , stock: 5}
  );
  

  return (
    <>
     <h1>Parent{count}</h1>
     <div className='container'>
        <Child x={count} productdetailes={product}/>
                <button onClick={()=>setCount(count+1)}>Increment Parent Count</button>

     </div>
    </>
  )
}
