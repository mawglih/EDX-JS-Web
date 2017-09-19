import React, { Component } from 'react';
import $ from 'jquery';
import Article from './article'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
    this.parse = this.parse.bind(this);
  }

  ComponentDidMount() {
    var API_KEY = '35a2a288e8eb4150b185d8118473de76';
    var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?' + API_KEY;
    $.getJSON(url, function (data, status) {
      return this.setState({
        articles: this.parse(data)
      });
    });
  }

  parse(result) {
    if(!result || !result.response) return [];
    var articles = result.response.docs;
    var parsedArticles = [];
    for(var i = 0; i < articles.length; i++) {
      var article = articles[i];
      if(article.multimedia.find(this.isXL)) {
        parsedArticles.push({
          id: article.id,
          title: article.headline.main || 'Untitled',
          imageURL: article.multimedia.find(this.isXL).url || '#',
          webURL: article.web_url || '#'
        });
      }
    }
    return parsedArticles;
  }

  isXL(image){
    return image.subtype === 'xlarge';
  }
    
  render() {
    return this.state.articles && (
      <div className="articles">
        {this.state.articles.map(function(article){
          return <Article article={article} key={article._id}/>
        })
        }
      </div>
    );
  }
}

export default App;
