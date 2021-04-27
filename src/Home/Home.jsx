import React from 'react'
import Products from '../Products/Products';
import './Home.css'
import JobSection from '../JobSection/JobSection';
import BlogsSection from '../Blogs/BlogsSection';
import Testimonials from '../Testimonials/Testimonials';
import HeaderSlider from '../HeaderSlider/HeaderSlider';

const items = [
  {
    altText: 'Slide 1',
    caption: 'Balsam',
    header: 'Pharamacy Everywhere',
    key: '1'
  },
  {
    altText: 'Slide 2',
    caption: 'Balsam',
    header: 'You Need, You Find',
    key: '2'
  },
  {
    altText: 'Slide 3',
    caption: 'Balsam',
    header: 'Fastest than you think',
    key: '3'
  }
];

const Home = () => {
  return (
    <div>
        <HeaderSlider/>

        <Products />
        <BlogsSection />
        <Testimonials />
        <JobSection />
      
    </div>
  )
}

export default Home
