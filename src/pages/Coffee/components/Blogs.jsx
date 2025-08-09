import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Blogs = () => {
  return <section className="blog py-0" id="blog">
      <Row className="align-items-center">
        <Col xs={12} sm={12} lg={6} className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".8s">
          <div className="blog-context text-white">
            <span className="d-block alt-font font-weight-normal pb-2">May 18, 2025</span>
            <h2 className="main-font">From the KaffeeWerk Journal</h2>
            <p>How we source and roast seasonal beans for Berlin’s coffee lovers, and why transparency matters from farm to cup.</p>
            <Link to="#" className="btn button btn-medium btn-rounded btn-transparent mb-5">Read Story</Link>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} className="blog-background wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" />
      </Row>
    </section>;
};
export default Blogs;