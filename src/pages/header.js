import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
       <div>
           <header className="">
           <nav className="navbar navbar-expand-lg">
           <div className="container">
           <a className="navbar-brand" href="index.html"
            ><h2>Ind <em>Geos</em></h2></a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" 
                  > <Link to="/">Home</Link>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" > <Link to="/services">Services</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          
      </div>
      </nav>
      </header>
      </div>

        )
    }
}

export default Header ;