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

    newsDelete =(index, e) => {
        this.props.onDelete(index);
    }

    render() {
        const data = this.props.data;
        let newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map((item, index) => {
                return (
                    <div key={index}>
                        <Article
                            data={item}
                            onClick={this.newsClick}
                            onDelete={this.newsDelete.bind(this, index)}
                        />
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
                <p className="news__views" onClick={this.newsClick}>Readed news: {this.state.counter}</p>
            </div>
        );
    }
}
export default News;
