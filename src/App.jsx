import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';


function App() {



  
  return (
    <>
      <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>
      </div>
      
    </>
  );
}

export default App;


{/* 
    const namelist = ['saurabh', 'siddhi', 'om', 'chaitanya', 'bhaiya', 'sumit', 'sudam','komal didi','baydi didi','sachin','sanchita','sonal vahini'];
  const [name, setNames] = useState([]);
  const [count, setCount] = useState(0);

  const [isActive,setIsActive] = useState(false);

  // This will run only once when the component mounts
  useEffect(() => {
    setNames(namelist);
  }, []);
  
  <div>
{name.map((names, index) => (
  <h1 onClick={()=>setCount(count+1)} key={index}>{names } </h1>
))}
</div>
<button onClick={() => setCount(count + 1)}>Increment Count</button>
<h2>Count: {count}</h2>
<div onClick={() => setIsActive(!isActive)}>
{          
  (isActive ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>)
} 


</div>
<div>
{
  <input type={isActive ? "text" : "password"} name="" id="password" />
}
</div> 

*/}
