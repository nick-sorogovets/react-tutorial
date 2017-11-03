import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class News extends Component {
    state = { counter: 0 }
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    newsClick = (event) => {
        this.setState({ counter: this.state.counter + 1 })
    }

    newsDelete = (index, e) => {
        this.props.onDelete && this.props.onDelete(index);
    }

    renderArticle = (item, index) => {
        const onItemDeleted = this.newsDelete.bind(this, index);
        return (
            <div key={index}>
                <Article
                    data={item}
                    onClick={this.newsClick}
                    onDelete={onItemDeleted}
                />
            </div>
        )
    }

    render() {
        const data = this.props.data;
        const allNewsClass = data.length ? 'news__count' : 'none';
        const newsTemplate = data.length > 0
            ? data.map(this.renderArticle)
            : (<p>Unfortunately no news</p>);

        return (
            <div className="news">
                {newsTemplate}
                <strong className={allNewsClass}>All news count: {data.length}</strong>
                <p className="news__views" onClick={this.newsClick}>Readed news: {this.state.counter}</p>
            </div>
        );
    }
}
export default News;
