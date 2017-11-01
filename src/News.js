import React, { Component } from 'react';

class News extends Component {
    render() {
        const data = this.props.data;
        let newsTemplate;
        if(data.length > 0) {
            newsTemplate = data.map((item, index) => {
                return (
                    <div key={index}>
                        <p className="news__author">{item.author}:</p>
                        <p className="news__text">{item.text}</p>
                    </div>
                )
            });
        } else {
            newsTemplate = <p>Unfortunately no news</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length ? '' : 'none'}>All news count: {data.length}</strong>
            </div>
        );
    }
}

class Acticle extends 
export default News;