import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="footer-social">
              <ul className="list-unstyled social-icons social-icons-simple">
                <li><a className="social-icon wow fadeInUp" href=""><i className="fab fa-facebook-f" aria-hidden="true" /> </a> </li>
                <li><a className="social-icon wow fadeInDown" href=""><i className="fab fa-twitter" aria-hidden="true" /> </a> </li>
                <li><a className="social-icon wow fadeInUp" href=""><i className="fab fa-google-plus-g" aria-hidden="true" /> </a> </li>
                <li><a className="social-icon wow fadeInDown" href=""><i className="fab fa-linkedin-in" aria-hidden="true" /> </a> </li>
                <li><a className="social-icon wow fadeInUp" href=""><i className="fab fa-instagram" aria-hidden="true" /> </a> </li>
                <li><a className="social-icon wow fadeInUp" href=""><i className="fab fa-pinterest-p" aria-hidden="true" /> </a> </li>
              </ul>
            </div>
            <p className="company-about fadeIn text-white">© {new Date().getFullYear()} KaffeeWerk Berlin. All rights reserved.</p>
            <p className="company-about fadeIn text-white">© {new Date().getFullYear()} Made with Love By <a href="https://webstreet.dev" target="_blank" rel="noopener noreferrer">WebStreet</a></p>

          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;