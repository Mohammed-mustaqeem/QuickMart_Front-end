import React from 'react'

import Hero from '../components/Home/Hero'
import LatestProduct from '../components/Home/LatestProduct'
import Testimonial from '../components/Home/Testimonial';
import Footer from '../components/Home/Footer';


const HomePage = () => {
  return (
    <>
      {/* <Navigationbr/> */}
      <Hero />
      <LatestProduct />
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default HomePage
