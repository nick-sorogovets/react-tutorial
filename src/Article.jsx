import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    state = { visible: false };

    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    }
    readMore = (event) => {
        event.preventDefault();
        this.setState({ visible: true });
        this.props.onClick && this.props.onClick(event);
    }

    readLess = (event) => {
        event.preventDefault();
        this.setState({ visible: false });
    }

    delete = (event) => {
        event.preventDefault();
        this.props.onDelete && this.props.onDelete();
    }
    render() {
        const { author, title, text } = this.props.data;
        const visible = this.state.visible;
        return (
            <div className='article'>
                <button className="news__delete" onClick={this.delete}>X</button>
                <p className='news__author'>{author}:</p>
                <p className="news__text">{title}</p>
                <a href="#"
                    onClick={this.readMore}
                    className={"news__readmore " + (visible ? 'none' : '')}>
                    More...
                </a>

                <p className={"news__big-text " + (visible ? '' : 'none')}>{text}</p>
                <a
                    href="#"
                    onClick={this.readLess}
                    className={"news_readless " + (visible ? '' : 'none')}>
                    Less...
                </a>
            </div>
        )
    }
}

export default Article;