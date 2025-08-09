import '@vendor/css/jquery.fancybox.min.css';
import '@vendor/js/jquery.fancybox.min.js';
import galleryBorder from '../assets/images/gallery-border.png';
import galleryImg1 from '../assets/images/gallery-img-1.jpg';
import galleryImg2 from '../assets/images/gallery-img-2.jpg';
import galleryImg3 from '../assets/images/gallery-img-3.jpg';
import galleryImg4 from '../assets/images/gallery-img-4.jpg';
import galleryImg5 from '../assets/images/gallery-img-5.jpg';
import galleryImg6 from '../assets/images/gallery-img-6.jpg';
import galleryImg7 from '../assets/images/gallery-img-7.jpg';
import galleryImg8 from '../assets/images/gallery-img-8.jpg';
import galleryImg9 from '../assets/images/gallery-img-9.jpg';
import galleryImg10 from '../assets/images/gallery-img-10.jpg';
import galleryImg11 from '../assets/images/gallery-img-11.jpg';
import { Col, Container, Row } from 'react-bootstrap';
const CoffeeMenu = () => {
  return <section className="menu portfolio-three pb-0" id="menu">
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8} className="offset-md-1 offset-lg-2 text-center wow fadeIn" style={{
          visibility: 'visible',
          animationName: 'fadeIn'
        }}>
            <div className="heading-area d-inline-block">
              <div className="mb-4"><img src={galleryBorder} alt="Border" /></div>
              <h6 className="sub-title alt-font text-sec">Top quality coffee</h6>
              <h2 className="title main-font text-main my-4">Our Coffee Menu</h2>
              <p className="paragraph alt-font text-sec">Signature drinks and seasonal specials featuring our freshly roasted beans. From classic espresso to Black Forest-inspired creations.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="m-0">
          <Col md={2} className="items web">
            <div className="item-img">
              <a href={galleryImg1} data-fancybox="images">
                <img src={galleryImg1} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Espresso Classico</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={8} className="items web">
            <div className="item-img">
              <a href={galleryImg2} data-fancybox="images">
                <img src={galleryImg2} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Flat White</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={2} className="items web">
            <div className="item-img">
              <a href={galleryImg3} data-fancybox="images">
                <img src={galleryImg3} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Oat Cappuccino</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic brand">
            <div className="item-img">
              <a href={galleryImg4} data-fancybox="images">
                <img src={galleryImg4} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Black Forest Mocha</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items brand">
            <div className="item-img">
              <a href={galleryImg5} data-fancybox="images">
                <img src={galleryImg5} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Spree River Cold Brew</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg6} data-fancybox="images">
                <img src={galleryImg6} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Cinnamon Berliner</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg7} data-fancybox="images">
                <img src={galleryImg7} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Iced Latte</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg8} data-fancybox="images">
                <img src={galleryImg8} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Hazelnut Praline Latte</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg9} data-fancybox="images">
                <img src={galleryImg9} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Caffè Crema</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg10} data-fancybox="images">
                <img src={galleryImg10} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Vanilla Affogato</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col md={3} className="items graphic">
            <div className="item-img">
              <a href={galleryImg11} data-fancybox="images">
                <img src={galleryImg11} alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info text-center">
                    <span className="image-hover mb-3"><i className="lni-coffee-cup" /></span>
                    <h5 className="text-white">Filter – V60</h5>
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CoffeeMenu;