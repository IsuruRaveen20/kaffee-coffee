import { Col, Container, Row } from 'react-bootstrap';
import galleryBorder from '../assets/images/gallery-border.png';
const ContactUsForm = () => {
  return <section id="contact">
      <Container>
        <Row>
          <Col xs={12} md={7} className="pl-md-0 wow fadeInLeft order-2 order-md-1 padding-top" data-wow-duration="1s" data-wow-delay=".5s">
            <div className="mapouter">
              <div id="map" className="full-map bg-img-map">
                <iframe className="map" src="https://www.google.com/maps?q=Marienstraße+23,+10117+Berlin,+Germany&output=embed" width={552} height={650} style={{
                border: 0
              }} allowFullScreen />
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className="pr-md-0 wow fadeInRight order-1 order-md-2" data-wow-duration="1s" data-wow-delay=".5s">
            <div className="heading-area">
              <div className="mb-4"><img src={galleryBorder} alt="Border" /></div>
              <h2 className="title main-font text-main mb-2">Order for pickup & delivery</h2>
            </div>
            <form className="contact-form" id="contact-form-data">
              <div id="result" />
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Your Name" required id="your_name" name="userName" />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email" required id="your_email" name="userEmail" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Contact" required id="your_contact" name="contact" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Coffee Details" id="message" name="userMessage" defaultValue={""} />
              </div>
              <a href="" id="submit_btn" className="contact_btn btn button btn-medium btn-rounded btn-grey w-100 d-block mt-5">Send Message</a>
            </form>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default ContactUsForm;