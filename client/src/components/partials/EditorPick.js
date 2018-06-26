import React from 'react';
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEditorpick } from '../../actions/editorpickActions';

class EditorPick extends React.Component {

    componentDidMount() {

        this.props.fetchEditorpick(this.props.match.params.category || "").then(q => {

        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category != nextProps.match.params.category) {
            this.props.fetchEditorpick(nextProps.match.params.category || "").then(q => {

            });
        }
    }

    render() {
        const { error, loading, editorpick } = this.props;

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
            <section className="section editors-picks mb-20">
                <div className="title-wrap">
                    <h3 className="section-title">EDİTÖRÜN SEÇTİKLERİ</h3>
                    <a href="#" className="all-posts-url">Tümü</a>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        {editorpick.slice(0, 1).map(ep => {
                            return (
                                <article key={ep.id} className="entry">
                                    <div className="entry__img-holder">
                                        <NavLink to={"/" + ep.calias + "/" + ep.alias}>
                                            <div className="thumb-container thumb-75">
                                                <img data-src={ep.imageUrl} src="/img/empty.png" className="entry__img lazyload" alt={ep.imageAlt} />
                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className="entry__body">
                                        <div className="entry__header">
                                            <h2 class="entry__title">
                                                <NavLink to={"/" + ep.calias + "/" + ep.alias}> {ep.title}</NavLink>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-date">
                                                    <i className="ui-date"></i>
                                                    {ep.publishDate}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>{ep.description}</p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    <div className="col-lg-5">
                        <ul className="post-list-small">
                            {editorpick.slice(1).map((ep, i) => {
                                return (
                                    <li key={ep.id} className="post-list-small__item">
                                        <article className="post-list-small__entry">
                                            <div className="post-list-small__body">
                                                <h3 className="post-list-small__entry-title">
                                                    <NavLink to={"/" + ep.calias + "/" + ep.alias}> {ep.title}</NavLink>
                                                </h3>
                                                <ul className="entry__meta">
                                                    <li className="entry__meta-date">
                                                        <i className="ui-date"></i>
                                                        {ep.publishDate}
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}

EditorPick.propTypes = {
    fetchEditorpick: PropTypes.func.isRequired,
    editorpick: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    editorpick: state.editorpick.items,
    loading: state.editorpick.loading,
    error: state.editorpick.error
});

export default connect(mapStateToProps, { fetchEditorpick })(EditorPick);