import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const [count, setCount] = useState(5);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <Navbar />
            <h1 className='bg-danger text-white'>Welcome to the Home Page {count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default Home;
