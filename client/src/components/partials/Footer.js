import React from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';


class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer footer--dark">
                    <div className="container">
                        <div className="footer__widgets">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="widget">
                                        <a href="index.html">
                                            <img src="/img/logo_mobile.png" className="logo__img" alt="" />
                                        </a>
                                        <p className="mt-20">We bring you the best Premium WordPress Themes. Deliver smart websites faster with this amazing
                                    theme. We care about our buyers.</p>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_nav_menu">
                                        <h4 className="widget-title">DİĞER SAYFALAR</h4>
                                        <ul>
                                            <li>
                                                <a href="about.html">Hakkımızda</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">İletişim</a>
                                            </li>
                                            <li>
                                                <a href="categories.html">Kullanım Koşulları</a>
                                            </li>
                                            <li>
                                                <a href="categories.html">Çerez Politikası</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget__newsletter">
                                        <h4 className="widget-title">BİZİ TAKİP EDİN</h4>

                                        <div className="socials mb-20">
                                            <a href="#" className="social social-facebook" aria-label="facebook">
                                                <i className="ui-facebook"></i>
                                            </a>
                                            <a href="#" className="social social-twitter" aria-label="twitter">
                                                <i className="ui-twitter"></i>
                                            </a>
                                            <a href="#" className="social social-google-plus" aria-label="google+">
                                                <i className="ui-google"></i>
                                            </a>
                                            <a href="#" className="social social-youtube" aria-label="youtube">
                                                <i className="ui-youtube"></i>
                                            </a>
                                            <a href="#" className="social social-instagram" aria-label="instagram">
                                                <i className="ui-instagram"></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-5 order-lg-1 text-md-center">
                                    <span className="copyright">
                                        &copy; 2018 AhaMag | Copyright
                            </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                <div id="back-to-top">
                    <a href="#top" aria-label="Go to top">
                        <i className="ui-arrow-up"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer