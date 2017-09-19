import React, { Component } from 'react';

export default class Article{
    render() {
        var Article = function ({article}) {
            var imgURL = 'http://static01.nyt.com' + article.imageURL;
            return(
                <div className="article">
                    <a className="article-link" href="{{article.webURL">
                        <img  className="article-image" src="{{article.imgURL}}" alt="{{article.title}}"/>
                    </a>
                </div>
            );
        }
    }
};