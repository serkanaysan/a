import React from 'react';

class TabPost extends React.Component {
    render() {
        return (
            <div className="widget widget-tabpost">
                <div className="tabs widget-tabpost__tabs">
                    <ul className="tabs__list widget-tabpost__tabs-list">
                        <li className="tabs__item widget-tabpost__tabs-item tabs__item--active">
                            <a href="#tab-trending" className="tabs__url tabs__trigger widget-tabpost__tabs-url">Son Haberler</a>
                        </li>
                        <li className="tabs__item widget-tabpost__tabs-item">
                            <a href="#tab-latest" className="tabs__url tabs__trigger widget-tabpost__tabs-url" style={{borderRight: "2px solid #ebeeef"}}>Editörün Seçtikleri</a>
                        </li>
                    </ul>
                    <div className="tabs__content tabs__content-trigger widget-tabpost__tabs-content">

                        <div className="tabs__content-pane tabs__content-pane--active" id="tab-trending">
                            <ul className="post-list-small">
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_1.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">Google is fixing its troubling burger emoji in Android 8.1</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_2.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">How Meditation Can Transform Your Business</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_3.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">June in Africa: Taxi wars, smarter cities and increased investments</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_4.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">PUBG Desert Map Finally Revealed, Here Are All The Details</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs__content-pane" id="tab-latest">
                            <ul className="post-list-small">
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_2.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">How Meditation Can Transform Your Business</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_1.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">Google is fixing its troubling burger emoji in Android 8.1</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_3.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">June in Africa: Taxi wars, smarter cities and increased investments</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_4.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">PUBG Desert Map Finally Revealed, Here Are All The Details</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs__content-pane" id="tab-comments">
                            <ul className="post-list-small">
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_3.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">June in Africa: Taxi wars, smarter cities and increased investments</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_1.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">Google is fixing its troubling burger emoji in Android 8.1</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_2.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">How Meditation Can Transform Your Business</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className="post-list-small__item">
                                    <article className="post-list-small__entry clearfix">
                                        <div className="post-list-small__img-holder">
                                            <div className="thumb-container thumb-75">
                                                <a href="newsdetail.html">
                                                    <img data-src="/img/blog/popular_post_4.jpg" src="/img/empty.png" alt="" className=" lazyload" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-list-small__body">
                                            <h3 className="post-list-small__entry-title">
                                                <a href="newsdetail.html">PUBG Desert Map Finally Revealed, Here Are All The Details</a>
                                            </h3>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    21 October, 2017
                                                        </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default TabPost