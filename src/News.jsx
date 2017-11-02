import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class News extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
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
export default News;
