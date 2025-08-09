import { useEffect } from 'react';
import logoImg from '../assets/images/logo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  useEffect(() => {
    $('.side-menu').removeClass('hidden');
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      if (scrollTop && scrollTop > 260) {
        $('.inner-header').addClass('header-appear');
      } else {
        $('.inner-header').removeClass('header-appear');
      }
    });
    if ($("#sidemenu_toggle").length) {
      $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
      }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
          $(".side-menu").addClass("side-menu-opacity");
        }, 500);
      }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
          $(".side-menu").addClass("side-menu-opacity");
        }, 500);
      }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
          $(".side-menu").addClass("side-menu-opacity");
        }, 500);
      });
    }
  }, []);
  return <header id="home" className="cursor-light">
      <div className="inner-header nav-icon">
        <div className="main-navigation">
          <Container>
            <Row>
              <Col xs={4} lg={2} className="mr-5">
                <a className="navbar-brand link scroll" href="#home">
                  <img src={logoImg} alt="logo" />
                </a>
              </Col>
              <Col xs={8} lg={8} className="simple-navbar d-flex align-items-center justify-content-end">
                <nav className="navbar navbar-expand-lg">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto d-flex align-items-center">
                      <a className="nav-link home active link scroll" href="#home">Home</a>
                      <a className="nav-link link scroll" href="#about">About Coffee</a>
                      <a className="nav-link link scroll" href="#menu">Our Menu</a>
                      <a className="nav-link link scroll" href="#reviews">Reviews</a>
                      <a className="nav-link link scroll" href="#blog">News &amp; Blog</a>
                      <a className="btn button btn-medium btn-rounded btn-transparent ml-0 ml-lg-5" data-animation-duration={500} data-fancybox data-src="#animatedModal" href=''>Order Now</a>
                      <span className="menu-line link"><i aria-hidden="true" className="fa fa-angle-down" /></span>
                    </div>
                  </div>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>

        <Link to="" className="sidemenu_btn link" id="sidemenu_toggle">
          <span />
          <span />
          <span />
        </Link>
      </div>

      <div className="side-menu hidden side-menu-opacity">
        <div className="bg-overlay" />
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose"><i /><i /></span>
          <Container>
            <Row className="w-100 side-menu-inner-content">
              <Col xs={12} className="d-flex justify-content-center align-items-center text-center">
                <Link to="/" className="navbar-brand"><img src={logoImg} alt="logo" /></Link>
              </Col>
              <Col xs={12} lg={8} className="text-center text-lg-left">
                <nav className="side-nav w-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#about">About Coffee</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#menu">Our Menu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#reviews">Reviews</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#blog">News &amp; Blog</a>
                    </li>
                    <li className="get-started-btn">
                      <a className="btn button btn-medium btn-rounded btn-transparent" data-animation-duration={500} data-fancybox data-src="#animatedModal">Order Now</a>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col xs={12} lg={4} className="d-flex align-items-center text-center text-lg-left">
                <div className="side-footer text-white w-100">
                  <div className="menu-company-details">
                    <span>+49 30 236 789 12</span>
                    <span>hello@kaffeewerk-berlin.de</span>
                  </div>
                  <ul className="social-icons-simple">
                    <li><a className="facebook-text-hvr" href=""><i className="fab fa-facebook-f" /> </a> </li>
                    <li><a className="twitter-text-hvr" href=""><i className="fab fa-twitter" /> </a> </li>
                    <li><a className="youtube-text-hvr" href=""><i className="fab fa-youtube" /> </a> </li>
                    <li><a className="instagram-text-hvr" href=""><i className="fab fa-instagram" /> </a> </li>
                  </ul>
                  <p className="text-white">© {new Date().getFullYear()} KaffeeWerk Berlin. All rights reserved.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <a id="close_side_menu" href="" />

      <Container className="quote-content hidden animated-modal" id="animatedModal">

        <div className="pb-5 text-center">
          <span className="text-pink font-weight-200 font-20">KaffeeWerk Berlin</span>
          <h2 className="main-font font-weight-600 text-sec mt-2">Order for pickup & delivery</h2>
        </div>

        <form className="contact-form" id="modal-contact-form-data">
          <Row>

            <Col xs={12} className="col-12" id="quote_result" />

            <Col md={6}>
              <div className="form-group">
                <input className="form-control" id="quote_name" name="quoteName" placeholder="Name" required type="text" />
              </div>
              <div className="form-group">
                <input className="form-control" id="quote_contact" name="userPhone" placeholder="Contact #" required type="text" />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <input className="form-control" id="quote_email" name="userEmail" placeholder="Email" required type="email" />
              </div>
              <div className="form-group">
                <input className="form-control" id="quote_address" name="userAddress" placeholder="City / Block no" required type="text" />
              </div>
            </Col>

            <Col md={12}>
              <div className="form-group">
                <textarea className="form-control" id="userMessage" name="userMessage" placeholder="Please explain your order in detail." defaultValue={""} />
              </div>
            </Col>

            <Col md={12}>
              <div className="form-check">
                <label className="checkbox-lable font-weight-200 font-16">Contact by phone is preferred
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <a href="" className="btn button btn-medium btn-rounded btn-grey modal_contact_btn" id="quote_submit_btn">Submit Now</a>
            </Col>
          </Row>
        </form>
      </Container>
    </header>;
};
export default NavigationBar;