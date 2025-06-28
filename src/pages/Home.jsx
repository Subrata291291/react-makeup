import React from 'react'
import Banner from '../components/Banner'
import AboutContent from '../components/AboutContent'
import ServiceContent from '../components/ServiceContent'
import GallerySection from '../components/GalleryContent'
import ReviewContent from '../components/ReviewContent'
import BlogContent from '../components/BlogContent'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutContent/>
      <ServiceContent/>
      <GallerySection/>
      <ReviewContent/>
      <BlogContent/>
    </div>
  )
}

export default Home
