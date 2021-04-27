// import 'HeaderSlider.css';
import React, { useState } from 'react';
import "./HeaderSlider.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from 'react-router-dom';

const items = [
  {
    src:'https://www.aig.com.ph/content/dam/aig/apac/philippines/images/fc-category/medical-equipment-category-936.jpg/_jcr_content/renditions/default.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src:'https://www.aig.com.ph/content/dam/aig/apac/philippines/images/fc-category/medical-equipment-category-936.jpg/_jcr_content/renditions/default.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:'https://hhp-blog.s3.amazonaws.com/2017/08/iStock-812760206.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const HeaderSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  // const slides = items.map((item) => {
  //   return (
  //     // <CarouselItem
  //     // // className='header'
  //     //   onExiting={() => setAnimating(true)}
  //     //   onExited={() => setAnimating(false)}
  //     //   key={item.src}
  //     // >
  //     //   <img  src={item.src} alt={item.altText} />
  //     //   <CarouselCaption  captionText={item.caption} captionHeader={item.caption} >
  //     //   </CarouselCaption>
  //     // </CarouselItem>
  //   );
  // });

  return (
    <div className='header py-4'>
        <div className='container pt-4 mt-5'>
        <h1 className='pt-5 mt-5 header_title  text-left text-white '>
          BAlSAM PHARMACY
        </h1>
        <p className='text-left text-white py-2 mb-5 w-50'>
        This is a pharmacy website that is an initiative to help the upcoming visitors with the help. Baksam focuses on providing the most efficient help or needs as the pharmacy wants to be simple.
        </p>
        
        <Link to='/Contacts' className='main_btn mt-5'>
          Contact Us
        </Link>
        
       
        </div>
        
    </div>
    // <Carousel
    //   activeIndex={activeIndex}
    //   next={next}
    //   previous={previous}
    // >
    //   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //   {slides}
    //   <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    //   <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    // </Carousel>
  );
}

export default HeaderSlider;