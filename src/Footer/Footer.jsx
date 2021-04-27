import React from 'react'

import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Footer.css'

const Footer = () => {
    return (
        <div className="text-left footer_page  ">
            <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About us</h6>
            <p className="text-justify">Balsam.com <i>PHARMACY EVERYWHERE </i> is an initiative  to help the upcoming visitors with the help.
             Baksam focuses on providing the most efficient help or needs as the pharmacy wants to be simple. We will help visitors 
              concepts in different categories that include kids, hair, fitness, women, children, men, accessories and more.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><HashLink smooth to="#Products">Covid </HashLink></li>
              <li><HashLink smooth to="#Products">Child </HashLink></li>
              <li><HashLink smooth to="#Products">Skin </HashLink></li>
              <li><HashLink smooth to="#Products">Fitness </HashLink></li>
              <li><HashLink smooth to="#Products">Medicaments </HashLink></li>
              <li><HashLink smooth to="#Products">Accessories </HashLink></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/About" >About Us</Link></li>
              <li><Link to="Contacts" >Contact Us</Link></li>
              <li> Prescription </li>
              <li> Privacy Policy</li>
              <li><Link to="/Home" >Contribute</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
          <Link className='footer_brand' to="/"> Balsam</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link to='' className="facebook" ><FiFacebook /></Link></li>
              <li><Link to='' className="twitter" >< FiTwitter /></Link></li>
              <li><Link to='' className="dribbble" ><FiInstagram /></Link></li>
              <li><Link to='' className="linkedin" ><FiLinkedin /></Link></li>   
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> 
// </div>
    )
}

export default Footer
