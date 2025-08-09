import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import slider1Img from '../assets/images/slider-1.jpg';
import slider2Img from '../assets/images/slider-2.jpg';
import slider3Img from '../assets/images/slider-3.jpg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Col, Row } from 'react-bootstrap';
const HeroSlider = () => {
  return <section className="slider p-md-0">

      <SwiperComponent speed={1500} effect='coverflow' coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true
    }} modules={[Autoplay, Pagination, EffectCoverflow]} autoplay={{
      delay: 5000,
      disableOnInteraction: true
    }} pagination={{
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }}>

        <SwiperSlide>
          <div className="bg-overlay bg-black opacity-4" />
          <img src={slider1Img} alt="slider" />
          <div className="container slider-text">
            <Row>
              <Col xs={12} md={6} />
              <Col xs={12} md={6} className="text-center text-md-left mb-0 mb-md-5">
                <h1 className="main-font slider-heading">Berlin’s Artisan Coffee <span className="d-block">KaffeeWerk Berlin</span></h1>
                <p className="alt-font slider-para py-2">Small-batch roastery in Mitte. Specialty espresso, filter, and seasonal drinks crafted with sustainably sourced beans.</p>
                <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
              </Col>
            </Row>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-overlay bg-black opacity-4" />
          <img src={slider2Img} alt="slider" />
          <div className="container slider-text">
            <Row>
              <Col xs={12} md={8} lg={7} className="offset-md-2 offset-lg-3 text-center mb-0 mb-md-5">
                <h1 className="main-font slider-heading">Berlin’s Artisan Coffee <span className="d-block">KaffeeWerk Berlin</span></h1>
                <p className="alt-font slider-para py-2">Small-batch roastery in Mitte. Specialty espresso, filter, and seasonal drinks crafted with sustainably sourced beans.</p>
                <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
              </Col>
            </Row>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-overlay bg-black opacity-4" />
          <img src={slider3Img} alt="slider" />
          <div className="container slider-text">
            <Row>
              <Col xs={12} md={6} className="text-center text-md-left mb-0 mb-md-5">
                <h1 className="main-font slider-heading">Berlin’s Artisan Coffee <span className="d-block">KaffeeWerk Berlin</span></h1>
                <p className="alt-font slider-para py-2">Small-batch roastery in Mitte. Specialty espresso, filter, and seasonal drinks crafted with sustainably sourced beans.</p>
                <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
              </Col>
              <Col xs={12} md={6} />
            </Row>
          </div>
        </SwiperSlide>
      </SwiperComponent>
      <div className="swiper-pagination" />


      <ul className="social-icons social-icons-simple revicon white d-none d-lg-block">
        <li className="d-table"><a href="" className="social-icon"><i className="fab fa-facebook-f" /> </a> </li>
        <li className="d-table"><a href="" className="social-icon"><i className="fab fa-twitter" /> </a> </li>
        <li className="d-table"><a href="" className="social-icon"><i className="fab fa-linkedin-in" /> </a> </li>
        <li className="d-table"><a href="" className="social-icon"><i className="fab fa-instagram" /> </a> </li>
      </ul>
    </section>;
};
export default HeroSlider;