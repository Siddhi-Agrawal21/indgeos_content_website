import React from 'react';


class Footer extends React.Component{
    render(){
        return(

            <div>
           <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div cl assName="footer-heading">
                <h2>INDGEOS</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>LOCATION</h2>
              </div>
              <ul className="footer-list">
                <li>
                  Level 1 Building 10-A, DLF Cyber City, Phase-II, Gurgaon -
                  122002, Haryana
                </li>
                
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>MORE INFO</h2>
              </div>
              <ul className="footer-list">
                <li>Email: admin@indgeos.in</li>
                
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>GET SOCIAL WITH US</h2>
              </div>
              <ul className="footer-list">
                <li><a href="https://www.twitter.com/indgeos" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/company/indgeos/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                
              </ul>
            </div>
          </div>


        </div>
      </div>
    </footer>
            </div>
        )
    }
}

export default Footer;