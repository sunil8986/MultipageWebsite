import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { Mydata } from '../../Context.js';

// const HeroBanner = () => {
//   return (
//     <div id='herobanner'>
//         <Container>
//             <Row>
//                 <Col md={6}>
//                     <img src='./img/home1.svg' alt='Banner1' />
//                 </Col>
//                 <Col md={6} className='bannertext'>
//                     <h1>Creative and Quality is Our Services</h1>
//                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
//                     <NavLink to="/About">About us</NavLink>
//                 </Col>
//             </Row>
//         </Container>
//     </div>
//   )
// }

// export default HeroBanner


// const HeroBanner = ({ image, title, description, linkText, linkUrl }) => {
//     return (
//       <div className="hero-banner" id='herobanner'>
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <img src={image} alt="Hero" className="img-fluid" />
//             </Col>
//             <Col md={6}  className='bannertext'>
//               <h1>{title}</h1>
//               <p>{description}</p>
//               <NavLink to={linkUrl}>{linkText}</NavLink>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   };
  
//   export default HeroBanner;

const HeroBanner = ({ pageKey }) => {
    const heroDat = useContext(Mydata);
    
    let {heroData} = heroDat;
    console.log("bannerdata", heroData)

    const content = heroData[pageKey];
    
     if (!content) return null;
  
    return (
      <div className="hero-banner" id='herobanner'>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={content.image} alt="Hero" className="img-fluid" />
            </Col>
            <Col md={6} className='bannertext'>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
              <NavLink to={content.linkUrl}>{content.linkText}</NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default HeroBanner;