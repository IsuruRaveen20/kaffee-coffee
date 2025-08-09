import { useEffect } from 'react';
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import testimonialImg from '../assets/images/testimonial-img.png';
import galleryBorder from '../assets/images/gallery-border.png';
import review1Img from '../assets/images/review-1.jpg';
import review2Img from '../assets/images/review-2.jpg';
import review3Img from '../assets/images/review-3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
const CustomerReviews = () => {
  useEffect(() => {
    $('.testimonial-box').owlCarousel({
      loop: true,
      margin: 20,
      slideSpeed: 2000,
      slideTransition: 'linear',
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }, []);
  return <section className="reviews" id="reviews">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="wow fadeInLeft order-2 order-md-1 pt-5 pt-md-0" data-wow-duration="1s" data-wow-delay=".5s">
            <div className="reviews-img">
              <img src={testimonialImg} alt="Testimonial" />
            </div>
          </Col>
          <Col xs={12} md={6} className="wow fadeInRight order-1 order-md-2" data-wow-duration="1s" data-wow-delay=".5s">
            <div className="heading-area text-center">
              <div className="mb-4"><img src={galleryBorder} alt="About-line" /></div>
              <h2 className="title main-font text-main my-4">Coffee Lovers</h2>
            </div>
            <div className="testimonial-carousel">
              <div className="testimonial-box owl-carousel owl-theme">
                <div className="item text-center animate-fade">
                  <div className="icon-holder"><i className="fas fa-quote-right" /></div>
                  <p className="text">The flat white is spot on and the beans are super fresh. My go-to spot before work in Mitte.</p>
                  <div className="img-holder"><img src={review1Img} alt="Image" /></div>
                  <h4 className="user-name">Lena Kühn</h4>
                </div>
                <div className="item text-center animate-fade">
                  <div className="icon-holder"><i className="fas fa-quote-right" /></div>
                  <p className="text">Ordered beans online; fast bicycle delivery and great brewing tips included. Tastes like the café at home.</p>
                  <div className="img-holder"><img src={review2Img} alt="Image" /></div>
                  <h4 className="user-name">Markus Vogel</h4>
                </div>
                <div className="item text-center animate-fade">
                  <div className="icon-holder"><i className="fas fa-quote-right" /></div>
                  <p className="text">Loved the Black Forest Mocha—rich, not too sweet, and beautifully crafted. Friendly team too.</p>
                  <div className="img-holder"><img src={review3Img} alt="Image" /></div>
                  <h4 className="user-name">Anika Schmitt</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CustomerReviews;