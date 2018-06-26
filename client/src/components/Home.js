import React from 'react';

import Carousel from './partials/Carousel';
import EditorPick from './partials/EditorPick';
import LastNews from './partials/LastNews';
import TabPost from './partials/TabPost';

class Home extends React.Component {
   
    render() {
        return (
            <div>
                <Carousel {...this.props} />
                <div className="main-container container mt-40" id="main-container">
                    <div className="row">
                        <div className="col-lg-8 blog__content mb-30">
                            <EditorPick {...this.props} />

                            <div className="text-center pb-40">
                                <a href="#">
                                    <img src="/img/blog/placeholder_leaderboard.jpg" alt="" />
                                </a>
                            </div>

                            <LastNews {...this.props} />

                        </div>

                        <aside className="col-lg-4 sidebar sidebar--right">
                            <TabPost />

                            <div className="widget widget_media_image">
                                <a href="#">
                                    <img src="/img/blog/placeholder_300.jpg" alt="" />
                                </a>
                            </div>
                            <div className="widget widget-socials">
                                <h4 className="widget-title">Bizi Takip Edin</h4>
                                <div className="socials">
                                    <a className="social social-facebook social--large" href="#" title="facebook" target="_blank" aria-label="facebook">
                                        <i className="ui-facebook"></i>
                                    </a>
                                    <a className="social social-twitter social--large" href="#" title="twitter" target="_blank" aria-label="twitter">
                                        <i className="ui-twitter"></i>
                                    </a>
                                    <a className="social social-google-plus social--large" href="#" title="google" target="_blank" aria-label="google">
                                        <i className="ui-google"></i>
                                    </a>
                                    <a className="social social-instagram social--large" href="#" title="instagram" target="_blank" aria-label="instagram">
                                        <i className="ui-instagram"></i>
                                    </a>
                                    <a className="social social-youtube social--large" href="#" title="youtube" target="_blank" aria-label="youtube">
                                        <i className="ui-youtube"></i>
                                    </a>
                                    <a className="social social-rss social--large" href="#" title="rss" target="_blank" aria-label="rss">
                                        <i className="ui-rss"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="widget">
                                <h4 className="widget-title">Twitter</h4>
                                <div className="tweets-container">
                                    <div id="tweets"></div>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home