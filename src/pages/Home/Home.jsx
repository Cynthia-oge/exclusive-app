import React from 'react'
import Hero from '../../components/Hero/Hero'
import FlashSale from '../../components/FlashSale/FlashSale'
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay'
import BestProducts from '../../components/BestProducts/BestProducts'
import CategoryBanner from '../../components/categoryBanner/CategoryBanner'
import Explore from '../../components/Explore/Explore'
import Featured from '../../components/Featured/Featured'
import Services from '../../components/Services/Services'

const Home = () => {
  return (
    <div>
            <Hero />
              <FlashSale />
              <CategoryDisplay />
              <BestProducts />
              <CategoryBanner />
              <Explore />
              <Featured />
              <Services />
    </div>
  )
}

export default Home