import React from 'react';
import Footer from './footer';
import Header from './header';


class Services extends React.Component{
    render(){
        return(
   <div>
       <Header/>
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Services</h1>
            <p><a href="index.html">Home</a> / <span>Our Services</span></p>
          </div>
        </div>
      </div>
    </div>
   
<div className="services-section services-page">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          {/* <!-- <span>Hosting Services</span> --> */}
          <h2>Best Services We Provide</h2>
          
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="service-item">
          <i className="fa fa-cloud"></i>
          <h4>GIS Services</h4>
          <p>Our forefront knowledge of data mapping, feature extraction / compilation, information management, and integrating verticals with GIS expertise helps build application-centric solutions for various sectors.</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="service-item">
          <i className="fa fa-server"></i>
          <h4>Remote Sensing</h4>
          <p>With in-house experts in Remote sensing, image interpretation and Classification, you can rely on us to implement innovative techniques to get precise land cover classifications for a variety of applications.</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="service-item">
          <i className="fa fa-database"></i>
          <h4>GIS Data Management</h4>
          <p>Our results-driven culture follows a ‘data-first’ policy, helping identify and assess key data sources specific to project, and assist in data Collection, processing, creating, modeling, cleaning and validating, and data migration services.</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="service-item">
          <i className="fa fa-database"></i>
          <h4>Customized GIS Solutions</h4>
          <p>We offer customized GIS solutions for desktops, web, cloud, and mobile applications along with seamless integration across platforms and verticals to build revolutionary solutions varying from one use case to another, as you go.</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
  <Footer/>
   </div>

        )
    }
}


export default Services ;
