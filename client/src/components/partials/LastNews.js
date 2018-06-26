import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLastnews } from '../../actions/lastnewsActions';

class LastNews extends React.Component {
    componentDidMount() {
        this.props.fetchLastnews(this.props.match.params.category || "").then(q => {

        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category != nextProps.match.params.category) {
            this.props.fetchLastnews(nextProps.match.params.category || "").then(q => {

            });
        }
    }

    render() {

        const { error, loading, lastnews } = this.props;

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

            <section className="section tab-post mb-10">
                <div className="title-wrap">
                    <h3 className="section-title">Son Haberler</h3>

                    <div className="tabs tab-post__tabs">
                        <ul className="tabs__list">
                            <li className="tabs__item tabs__item--active">
                                <a href="#tab-all" className="tabs__trigger">Gündem</a>
                            </li>
                            <li className="tabs__item">
                                <a href="#tab-world" className="tabs__trigger">Spor</a>
                            </li>
                            <li className="tabs__item">
                                <a href="#tab-business" className="tabs__trigger">Ekonomi</a>
                            </li>
                            <li className="tabs__item">
                                <a href="#tab-politics" className="tabs__trigger">Eğitim</a>
                            </li>
                            <li className="tabs__item">
                                <a href="#tab-marketing" className="tabs__trigger">Yaşam</a>
                            </li>
                            <li className="tabs__item">
                                <a href="#tab-marketing" className="tabs__trigger">Magazin</a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="tabs__content tabs__content-trigger tab-post__tabs-content">
                    {lastnews.map(ln =>
                        <div className="tabs__content-pane tabs__content-pane--active" id="tab-all">
                            <div className="row">
                                <div className="col-md-6">
                                    <article className="entry">
                                        <div className="entry__img-holder">
                                            <a href="newsdetail.html">
                                                <div className="thumb-container thumb-75">
                                                    <img data-src="/img/blog/grid_post_img_1.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                                </div>
                                            </a>
                                        </div>

                                        <div className="entry__body">
                                            <div className="entry__header">
                                                <h2 className="entry__title">
                                                    <a href="newsdetail.html">Optimal Amount of Rainfall for Plants</a>
                                                </h2>
                                                <ul className="entry__meta">
                                                    <li className="entry__meta-date">
                                                        <i className="ui-date"></i>
                                                        21 October, 2017
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="entry__excerpt">
                                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-6">
                                    <article className="entry">
                                        <div className="entry__img-holder">
                                            <a href="newsdetail.html">
                                                <div className="thumb-container thumb-75">
                                                    <img data-src="/img/blog/grid_post_img_2.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                                </div>
                                            </a>
                                        </div>

                                        <div className="entry__body">
                                            <div className="entry__header">
                                                <h2 className="entry__title">
                                                    <a href="newsdetail.html">BRICS Nations Agree to Create Own Development Bank</a>
                                                </h2>
                                                <ul className="entry__meta">
                                                    <li className="entry__meta-date">
                                                        <i className="ui-date"></i>
                                                        21 October, 2017
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="entry__excerpt">
                                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="tabs__content-pane" id="tab-world">
                        <div className="row">
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_1.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">science</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">Optimal Amount of Rainfall for Plants</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_2.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">business</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">BRICS Nations Agree to Create Own Development Bank</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tabs__content-pane" id="tab-business">
                        <div className="row">
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_1.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">science</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">Optimal Amount of Rainfall for Plants</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_2.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">business</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">BRICS Nations Agree to Create Own Development Bank</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tabs__content-pane" id="tab-politics">
                        <div className="row">
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_1.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">science</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">Optimal Amount of Rainfall for Plants</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_2.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">business</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">BRICS Nations Agree to Create Own Development Bank</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tabs__content-pane" id="tab-marketing">
                        <div className="row">
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_1.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">science</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">Optimal Amount of Rainfall for Plants</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="entry">
                                    <div className="entry__img-holder">
                                        <a href="newsdetail.html">
                                            <div className="thumb-container thumb-75">
                                                <img data-src="/img/blog/grid_post_img_2.jpg" src="/img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <a href="#" className="entry__meta-category">business</a>
                                            <h2 className="entry__title">
                                                <a href="newsdetail.html">BRICS Nations Agree to Create Own Development Bank</a>
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
                                                <li className="entry__meta-comments">
                                                    <i className="ui-comments"></i>
                                                    <a href="#">115</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

LastNews.propTypes = {
    fetchLastnews: PropTypes.func.isRequired,
    lastnews: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    lastnews: state.lastnews.items,
    loading: state.lastnews.loading,
    error: state.lastnews.error
});

export default connect(mapStateToProps, { fetchLastnews })(LastNews);