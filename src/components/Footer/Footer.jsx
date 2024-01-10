import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer className="section-padding pb-3">
  <div className="container">
    <h2 className="color-white text-center">
     
    </h2>
    <div className="text-center my-5">
      <div className="dsn-def-btn-blue">
        <a  className="dsn-btn"><span className="dsn-icon"><i className="fas fa-angle-right" /></span><span className="position-relative"> REQUEST FOR CONSULTATION</span></a>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-3">
        <a><img src="" alt />
        </a>
        <ul className="social-media">
          <li>
            <a ><i className="fab fa-facebook-f" /></a>
          </li>
          <li>
            <a ><i className="fab fa-twitter" /></a>
          </li>
          <li>
            <a ><i className="fab fa-linkedin-in" /></a>
          </li>
          <li>
            <a  target="_blank"><i className="fab fa-instagram" /></a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h4 className="subtitle">NAVIGATION</h4>
        <ul className="menu">
          <li><a>ABOUT</a></li>
          <li><a >SERVICES</a></li>
          <li><a>SERVICE AREA</a></li>
          <li><a >EMPLOYMENT</a></li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h4 className="subtitle">NAVIGATION</h4>
        <ul className="menu">
          <li><a >NEWS &amp; MEDIA</a></li>
          <li><a >HOME CARE BLOG</a></li>
          <li><a >CAREERS</a></li>
          <li><a > CONSULTATION</a></li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h4 className="subtitle">ADDRESS</h4>
        <p >
         
        </p>
        <div>
          <p><strong>T</strong> : {'{'}{'{'} mobile[0] {'}'}{'}'}</p>
          <p><strong>F</strong> : {'{'}{'{'} mobile[1] {'}'}{'}'}</p>
        </div>
       
        <p>
          <strong>E</strong> :
          <a href="mailto:{{ companydetailsImage?.email }}">{'{'}{'{'}
            companydetailsImage?.email
            {'}'}{'}'}</a>
        </p>
      </div>
    </div>
  </div>
  <div className="container pt-5">
    <p className="text-center">
      {'{'}{'{'} companydetailsImage?.copyright {'}'}{'}'}
      {/* Copyright © 2023 Always There Home Health Care, LLC. All right reserved. */}
    </p>
  </div>
</footer>

    </>
  )
}

export default Footer