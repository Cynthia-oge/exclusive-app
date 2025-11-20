import React from 'react'
import Hero from './components/Hero/Hero'
import FlashSale from './components/FlashSale/FlashSale'
import Navbar from './components/common/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSale />
    </div>
  )
}

export default App