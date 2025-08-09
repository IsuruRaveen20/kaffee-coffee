import { useEffect } from 'react';
import '@vendor/js/jquery.appear.js';
import '@vendor/js/parallaxie.min.js';
import { Col, Container, Row } from 'react-bootstrap';
const AboutParallax = () => {
  useEffect(() => {
    $('.count').each(function () {
      $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    });
    const windowWidth = $(window).width();
    if (windowWidth && windowWidth > 992) {
      $(".parallax").parallaxie({
        speed: 0.55,
        offset: 0
      });
    }
  }, []);
  return <section className="parallax bg-img1">
      <Container>
        <Row>
          <Col lg={3} sm={6} className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="parallax-box text-white">
              <i className="lni-coffee-cup" aria-hidden="true" />
              <h2 className="count">124800</h2>
              <h5>Coffee Cups</h5>
            </div>
          </Col>
          <Col lg={3} sm={6} className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".6s">
            <div className="parallax-box text-white">
              <i className="lni-emoji-smile" aria-hidden="true" />
              <h2 className="count">36200</h2>
              <h5>Customers</h5>
            </div>
          </Col>
          <Col lg={3} sm={6} className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".9s">
            <div className="parallax-box text-white">
              <i className="lni-coffee-cup" aria-hidden="true" />
              <h2 className="count">42500</h2>
              <h5>Cup of Tea</h5>
            </div>
          </Col>
          <Col lg={3} sm={6} className="wow fadeIn" data-wow-duration="1s" data-wow-delay="1.2s">
            <div className="parallax-box text-white">
              <i className="lni-investment" aria-hidden="true" />
              <h2 className="count">2014</h2>
              <h5>Since</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default AboutParallax;