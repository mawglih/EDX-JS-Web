import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC6nOxjnzoBeT-7eGM_hLe5rcKo5NIabL0';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null,
      term: ''
    };
    this.videoSearch('vika raskina');
    //this.handleSearch = this.handleSearch.bind(this);
    
  }
   videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({ 
        videos:data,
        selectedVideo: data[0]
      });
    });
   }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar SearchText = {term => this.videoSearch(term)}/>
        </div>
        
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
              videos={this.state.videos}/>
          </div>
      </div>
    );
  }
}

export default App;
