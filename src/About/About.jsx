import React from "react";
import { Link } from "react-router-dom";
import './About.css'
import aboutUs from '../assets/aboutUs.png' ;

const About = () => {
  return (
    <div className="container blog_page mt-2 pt-5">
      <h2 className="section_title mb-4 mt-5">About Us</h2>
      <div className="row justify-content-between">
        <div className="blog_page_text col-9 col-sm-9 col-md-6 ">
          <h4 className="section_sub_title ">Hello, Visitors!</h4>
          <p className="lead pt-3">
            This is a pharmacy website that is an initiative to help the
            upcoming visitors with the help. Baksam focuses on providing the
            most efficient help or needs as the pharmacy wants to be simple. We
            will help visitors concepts in different categories that include
            kids, hair, fitness, women, children, men, accessories and more.
          </p>
          <hr className="my-2" />
          <p>
            It uses some categories for helping it's visitors, and some
            important blogs for our health.
          </p>
          <div className=' mb-5 mt-4'> 
            <Link to="/Contacts" >
              <button className="sec_btn mr-4 col-12 col-sm-9 col-md-4 ">Contact us</button>
            </Link>
           
              <button className="sec_btn  col-12 col-sm-9 col-md-4 ">Privacy Policy</button>
            
      </div>
        </div>
        <div className="blog_page_img col-12 col-sm-9 col-md-6 ">
          <img src={aboutUs} className='img-fluid' />
        </div>
      </div>
      
    </div>
  );
};

export default About;
