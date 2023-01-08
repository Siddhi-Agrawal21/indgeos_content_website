import React from 'react';
import Footer from './footer';
import Header from './header';


class Home extends React.Component{
    render(){
        return(
    <div>
    <Header/>
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="header-text caption">
              <h2>
                <b style={{color: '#FFFF00'}}>INDGEOS</b>
                <b style={{color: '#0fd9f8'}}>GEOSPATIAL</b> Technologies
              </h2>
              {/* <h6 style={{padding-top: -70px}}> */}
                An up-and-coming premier provider of GIS mapping services and
                solutions in India.
              
              {/* <div id="search-section">
              	<form id="suggestion_form" name="gs" method="get" action="#">
                <div class="searchText">
                  
                  <input type="text" name="q" class="searchText" placeholder="Enter your domain here..." autocomplete="on" />
                  <ul>
                    <li><label><input type="checkbox" name="ext_com" value="1"><span>.com <em>($10/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_net" value="1"><span>.net <em>($12/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_org" value="1"><span>.org <em>($8/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_in" value="1"><span>.in <em>($6/yr)</em></span></label></li>
                  </ul>
                </div>
                    <input type="submit" name="results" class="main-button" value="Search Now">
                 </form>
               <div class="advSearch_chkbox">
               </div>
              </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              {/* <!-- <span>Hosting Services</span> --> */}
              <h2>About Indgeos Geospatial Technologies</h2>
              <p style={{fontSize: "20px"}}>
                The digital environment has seen tremendous advancements due to
                the fusion of advanced technologies across industries and
                verticals. Name any major sector – agriculture to utilities,
                defence & security to emergencies, natural resources to business
                management, and so on – and Geospatial technologies are behind
                cutting-edge solutions for all today.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
   

    <div className="pricing-section">
      <div className="background-image-pricing"></div>
      <div className="container">
        <div className="pricing-item">
          <h4>Who we are?</h4>
          <p>
            IndGeos is on its way to establish itself as a leading provider of
            Geospatial services and solutions for different user communities in
            India on the same lines. Founded in 2018, IndGeos Geospatial
            Services has had a successful journey in terms of rendering a
            variety of GIS and Remote Sensing projects through affordable
            solutions for a wide range of public and private users.
          </p>
        </div>
        <div className="pricing-item">
          <h4>What we Do?</h4>

          <p>
            At IndGeos, our USP lies in the special combination of experience,
            vision, innovative thinking, and cost effectiveness in one. We
            aspire to be among the top GIS companies in India, making our mark
            in the Geospatial industry through pioneering services and
            solutions. We specialize in tackling the most common and pressing
            spatial challenges with advanced location intelligence, extracting
            useful insights from data at hand, and building groundbreaking
            solutions on the pillars of sound research and technological
            advancements from our _ cumulative years of experience working in
            the industry. IndGeos also believes in progressing hand-in-hand with
            advanced technologies like Big Data analytics, Artificial
            Intelligence, Machine Learning algorithms, and Remote Sensing
            technology to anchor as a crucial foundation on which to build
            wide-ranging, sector-specific application-centric solutions for
            solving the world’s challenges.
          </p>
        </div>

        <div className="pricing-item">
          <h4>Why Indgeos?</h4>

          <p>
            With over 30+ years of combined expertise, the GIS and Remote
            Sensing experts on the IndGeos team are energetic, passionate, and
            committed. We are on our way to become established pioneers in the
            field of Geospatial data and technologies, offering not just
            cutting-edge data processing and visualization services for our wide
            range of clients from around the world, but also game-changing
            applications that address governance, socioeconomic and
            environmental issues at the right place and time. Our results-driven
            culture places information at the centre of all its decisions and
            operations, thus benefitting our clients by giving them exactly what
            they are rooting for.
          </p>
        </div>
      </div>
    </div>
    

    <div className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span>Best Quality for you</span>
              <h2>GIS Features</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Efficient & cost saving</h4>
              <p>
                GIS can assist development projects with its mapping and
                modelling capabilities which reduces both time & efforts in a
                cost saving manner.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Decision making capabilities</h4>
              <p>
                Through its location intelligence, planning & selection routes
                are much easier and accurate, thus it acts as a decision support
                system.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Route Navigations</h4>
              <p>
                While navigating the routes, It's the GIS which helps to make
                the journey plans and find the destinations beautifully!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Record Keeping</h4>
              <p>
                All locational records are kept and managed through GIS database
                in an easy retrievable manner.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Connecting Geographically</h4>
              <p>
                Through GIS, the course of actions of several geographic
                locations can be planned properly and wisely
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src="assets/images/feature-01.png" alt="" />
              </div>
              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor ame taxidermy sriracha cardigan salvia
                actually vice migas en pin sustainable carry scenester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
        </div>)
    }
}



export default Home ;