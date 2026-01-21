import React ,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Parent from './components/Parent/Parent.jsx';
function App() {
  const [product,setProduct] = useState([
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
    <Parent product={product}/>
    {/* <Home/>
    <About/>
    <Gallery/> */}

    </>
  )
}

export default App
