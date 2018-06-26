import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categoryActions';

class Header extends React.Component {

  componentDidMount() {
    this.props.fetchCategory();
  }

  render() {

    const { error, loading, category } = this.props;

    if (error) {
      return (
        <div>
          Error
        </div>
      )
    }

    if (loading) {
      return (
        <div>
          Loading
        </div>
      )
    }

    return (
      <div>

        <div className="loader-mask">
          <div className="loader">
            <div></div>
          </div>
        </div>

        <div className="content-overlay"></div>

        <header className="sidenav" id="sidenav">
          <div className="sidenav__close">
            <button className="sidenav__close-button" id="sidenav__close-button" aria-label="close sidenav">
              <i className="ui-close sidenav__close-icon"></i>
            </button>
          </div>

          <nav className="sidenav__menu-container">
            <ul className="sidenav__menu" role="menubar">
              {category.map(category => (
                <li key={category.id}>
                  <NavLink to={"/"+category.alias} className="sidenav__menu-link sidenav__menu-link-category" style={{ borderLeftStyle: "solid", borderLeftWidth: "3px", borderLeftColor: "#" + category.color }}>{category.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="socials sidenav__socials">
            <a className="social social-facebook" href="#" target="_blank" aria-label="facebook">
              <i className="ui-facebook"></i>
            </a>
            <a className="social social-twitter" href="#" target="_blank" aria-label="twitter">
              <i className="ui-twitter"></i>
            </a>
            <a className="social social-google-plus" href="#" target="_blank" aria-label="google">
              <i className="ui-google"></i>
            </a>
            <a className="social social-youtube" href="#" target="_blank" aria-label="youtube">
              <i className="ui-youtube"></i>
            </a>
            <a className="social social-instagram" href="#" target="_blank" aria-label="instagram">
              <i className="ui-instagram"></i>
            </a>
          </div>
        </header>

        <header className="nav">

          <div className="nav__holder nav--sticky">
            <div className="container relative">
              <div className="flex-parent">

                <button className="nav-icon-toggle" id="nav-icon-toggle" aria-label="Open side menu">
                  <span className="nav-icon-toggle__box">
                    <span className="nav-icon-toggle__inner"></span>
                  </span>
                </button>

                <a href="/" className="logo logo--mobile d-lg-none">
                  <img className="logo__img" src="/img/logo_mobile.png" alt="logo" />
                </a>

                <nav className="flex-child nav__wrap d-none d-lg-block">
                  <ul className="nav__menu">

                    <li className="active">
                      <NavLink to="/">Anasayfa</NavLink>
                    </li>
                    <li>
                      <NavLink to="/doviz">Döviz</NavLink>
                    </li>
                    <li>
                      <NavLink to="/hava-durumu">Hava Durumu</NavLink>
                    </li>
                    <li>
                      <NavLink to="/puan-durumu">Puan Durumu</NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="nav__right nav--align-right d-lg-flex">

                  <div className="nav__right-item socials nav__socials d-none d-lg-flex">
                    <a className="social social-facebook social--nobase" href="#" target="_blank" aria-label="facebook">
                      <i className="ui-facebook"></i>
                    </a>
                    <a className="social social-twitter social--nobase" href="#" target="_blank" aria-label="twitter">
                      <i className="ui-twitter"></i>
                    </a>
                    <a className="social social-google social--nobase" href="#" target="_blank" aria-label="google">
                      <i className="ui-google"></i>
                    </a>
                    <a className="social social-youtube social--nobase" href="#" target="_blank" aria-label="youtube">
                      <i className="ui-youtube"></i>
                    </a>
                    <a className="social social-instagram social--nobase" href="#" target="_blank" aria-label="instagram">
                      <i className="ui-instagram"></i>
                    </a>
                  </div>

                  <div className="nav__right-item nav__search">
                    <a href="#" className="nav__search-trigger" id="nav__search-trigger">
                      <i className="ui-search nav__search-trigger-icon"></i>
                    </a>
                    <div className="nav__search-box" id="nav__search-box">
                      <form className="nav__search-form">
                        <input type="text" placeholder="Ara" className="nav__search-input" />
                        <button type="submit" className="search-button btn btn-lg btn-color btn-button">
                          <i className="ui-search nav__search-icon"></i>
                        </button>
                      </form>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </header>

        <div className="header">
          <div className="container">
            <div className="flex-parent align-items-center">

              <a href="index.html" className="logo d-none d-lg-block">
                <img className="logo__img" src="/img/logo.png" alt="logo" />
              </a>

              <div className="text-center">
                <a href="#">
                  <img src="/img/blog/placeholder_leaderboard.jpg" alt="" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  category: state.category.items,
  loading: state.category.loading,
  error: state.category.error
});

export default connect(mapStateToProps, { fetchCategory })(Header);