import { toggleDocumentAttribute } from '@/utils';
import { useEffect } from 'react';
import WOW from 'wow.js';
import Preloader from './components/Preloader';
import NavigationBar from './components/NavigationBar';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import AboutParallax from './components/AboutParallax';
import CoffeeMenu from './components/CoffeeMenu';
import CustomerReviews from './components/CustomerReviews';
import Blogs from './components/Blogs';
import ContactUsForm from './components/ContactUsForm';
import Footer from './components/Footer';
import '@vendor/css/LineIcons.min.css';
import './assets/css/line-awesome.min.css';
import './assets/css/style.css';
import './assets/css/custom.css';
const Coffee = () => {
  useEffect(() => {
    const width = $(window).width();
    if (width && width > 767) {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init();
    }
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      if (scrollTop && scrollTop > 260) {
        $('.inner-header').addClass('header-appear');
      } else {
        $('.inner-header').removeClass('header-appear');
      }
    });
    toggleDocumentAttribute('data-spy', 'scroll', 'body');
    toggleDocumentAttribute('data-target', '.navbar', 'body');
    toggleDocumentAttribute('data-offset', '90', 'body');
    return () => {
      toggleDocumentAttribute('data-spy', 'scroll', 'body', true);
      toggleDocumentAttribute('data-target', '.navbar', 'body', true);
      toggleDocumentAttribute('data-offset', '90', 'body', true);
    };
  }, []);
  return <>
      <Preloader />

      <NavigationBar />

      <HeroSlider />

      <AboutUs />

      <AboutParallax />

      <CoffeeMenu />

      <CustomerReviews />

      <Blogs />

      <ContactUsForm />

      <Footer />
    </>;
};
export default Coffee;