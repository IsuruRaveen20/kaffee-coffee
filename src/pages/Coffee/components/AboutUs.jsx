import aboutImg from '../assets/images/about-img.png';
import aboutBorder from '../assets/images/about-border.png';
import { Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
  return <section className="about" id="about">
      <Container>

        <Row>
          <Col xs={12} md={10} lg={8} className="offset-md-1 offset-lg-2 text-center wow fadeIn" style={{
          visibility: 'visible',
          animationName: 'fadeIn'
        }}>
            <div className="heading-area d-inline-block">
              <div className="mb-4"><img src={aboutBorder} alt="About-line" /></div>
              <h6 className="sub-title alt-font text-sec">Artisan coffee in Berlin</h6>
              <h2 className="title main-font text-main my-4">KaffeeWerk Berlin</h2>
              <p className="paragraph alt-font text-sec">We roast fresh, small-batch coffee in the heart of Mitte, sourcing seasonal beans from sustainable farms. From bright espresso to slow-brew filter, every cup is crafted by baristas who care.</p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">

          <Col lg={4} className="mb-5 mb-lg-0 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-coffee-cup" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Roasted daily in Mitte</h4>
                <p>Small-batch roasting for consistent flavor and maximum freshness in every cup.</p>
              </Col>
            </Row>

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-fresh-juice" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Seasonal single origins</h4>
                <p>Limited lots with distinct terroir, rotating monthly to highlight peak harvests.</p>
              </Col>
            </Row>

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-emoji-smile" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Pickup & delivery</h4>
                <p>Same-day pickup and bicycle delivery across central Berlin areas.</p>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-5 mb-lg-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">

            <div className="app-image">
              <img src={aboutImg} alt="image" />
            </div>
          </Col>

          <Col lg={4} className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-coffee-cup" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Workshops & trainings</h4>
                <p>Intro to espresso, latte art, and home brewing classes every month.</p>
              </Col>
            </Row>

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-juice" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Sustainably sourced</h4>
                <p>Direct-trade partnerships that ensure fair pay and long-term relationships.</p>
              </Col>
            </Row>

            <Row className="app-feature">
              <Col xs={12} lg={2} className="p-lg-0">
                <i className="lni lni-emoji-smile" />
              </Col>
              <Col xs={12} lg={10} className="p-lg-0">
                <h4 className="mb-3">Plant-based friendly</h4>
                <p>Oat, soy, and almond options without extra charges on key drinks.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default AboutUs;