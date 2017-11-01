import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    readMore(event) {
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

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
    })
}

class News extends Component {
    render() {
        const data = this.props.data;
        let newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map((item, index) => {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            });
        } else {
            newsTemplate = <p>Unfortunately no news</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length ? 'news__count' : 'none'}>All news count: {data.length}</strong>
            </div>
        );
    }
}
News.propTypes = {
    data: PropTypes.array.isRequired
};
export default News;
