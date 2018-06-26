import React from 'react';
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCarousel } from '../../actions/carouselActions';


class Carousel extends React.Component {

    componentDidMount() {
        this.props.fetchCarousel(this.props.match.params.category || "").then(q => {
            window.initOwlCarousel();
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category != nextProps.match.params.category) {
            this.props.fetchCarousel(nextProps.match.params.category || "").then(q => {
                window.initOwlCarousel();
            });
        }
    }

    render() {

        const { error, loading, carousel } = this.props;
        
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
            <section className="featured-posts-grid bg-dark">
                <div className="container clearfix">

                    <div className="featured-posts-grid__item featured-posts-grid__item--lg">
                        <div id="owl-hero-grid" className="owl-carousel owl-theme owl-carousel--dots-inside">
                            {carousel.map(carousel => (
                                <article key={carousel.id} className="entry featured-posts-grid__entry">
                                    <div className="thumb-bg-holder owl-lazy" data-src={carousel.imageUrl}>
                                        <img src={carousel.imageUrl} alt={carousel.imageAlt} className="d-none" />
                                        <NavLink to={"/" + carousel.calias + "/" + carousel.alias} className="thumb-url"></NavLink>
                                        <div className="bottom-gradient"></div>
                                    </div>

                                    <div className="thumb-text-holder">
                                        <NavLink to={"/" + carousel.calias + "/" + carousel.alias} className="entry__meta-category entry__meta-category-color" style={{ borderLeftStyle: "solid", borderLeftWidth: "3px", borderLeftColor: "#" + carousel.color }}>{carousel.category}</NavLink>
                                        <h2 className="thumb-entry-title">
                                            <NavLink to={"/"+carousel.calias+"/"+carousel.alias}>{carousel.title}</NavLink>
                                        </h2>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>


                    <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                        <article className="entry featured-posts-grid__entry">
                            <div className="thumb-bg-holder" >
                                <a href="newsdetail.html" className="thumb-url"></a>
                                <div className="bottom-gradient"></div>
                            </div>

                            <div className="thumb-text-holder">
                                <h2 className="thumb-entry-title thumb-entry-title--sm">
                                    <a href="newsdetail.html">These Are the 20 Best Places to Work in 2018</a>
                                </h2>
                                <ul className="entry__meta">
                                    <li className="entry__meta-author">
                                        <i className="ui-author"></i>
                                        <a href="#">DeoThemes</a>
                                    </li>
                                    <li className="entry__meta-date">
                                        <i className="ui-date"></i>
                                        21 October, 2017
                                </li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                        <article className="entry featured-posts-grid__entry">
                            <div className="thumb-bg-holder" >
                                <a href="newsdetail.html" className="thumb-url"></a>
                                <div className="bottom-gradient"></div>
                            </div>

                            <div className="thumb-text-holder">
                                <h2 className="thumb-entry-title thumb-entry-title--sm">
                                    <a href="newsdetail.html">Experience the Grand Canyon National Park</a>
                                </h2>
                                <ul className="entry__meta">
                                    <li className="entry__meta-author">
                                        <i className="ui-author"></i>
                                        <a href="#">DeoThemes</a>
                                    </li>
                                    <li className="entry__meta-date">
                                        <i className="ui-date"></i>
                                        21 October, 2017
                                </li>
                                </ul>
                            </div>
                        </article>
                    </div>

                </div>
            </section>
        )
    }
}


Carousel.propTypes = {
    fetchCarousel: PropTypes.func.isRequired,
    carousel: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    carousel: state.carousel.items,
    loading: state.carousel.loading,
    error: state.carousel.error
});

export default connect(mapStateToProps, { fetchCarousel })(Carousel);