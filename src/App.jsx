import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import WishList from './pages/WishList/WishList';
import ProductDescription from './pages/ProductDescription/ProductDescription';

function App() {
  return (
    <div>
      <Navbar />
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/productdescription" element={<ProductDescription />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App