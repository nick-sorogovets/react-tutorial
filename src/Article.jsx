import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    state = { visible: false };

    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            bigText: PropTypes.string.isRequired,
        })
    }
    readMore = (event) => {
        event.preventDefault();
        this.setState({ visible: true });
    }

    render() {
        const { author, text, bigText } = this.props.data;
        const visible = this.state.visible;
        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#"
                    onClick={this.readMore}
                    className={"news__readmore " + (visible ? 'none' : '')}>
                    More...
                </a>
                <p className={"news__big-text " + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        )
    }
}

// Article.propTypes = {
//     data: PropTypes.shape({
//         author: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         bigText: PropTypes.string.isRequired,
//     })
// }

export default Article;