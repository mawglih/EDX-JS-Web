import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.searchText = this.searchText.bind(this);
        this.state={
            searchText : ''
        }
    }

    searchText(e) {
        e.preventDefault();
        let searchText = this.state.searchText;
        searchText = this.refs.id.value;
        console.log(searchText);
        this.setState({searchText}, () =>{
            this.props.SearchText(this.state.searchText);
        });
            
        
        this.refs.id.value = '';
    }

    render() {
        return(
            <div className="search-bar">
                <form  className="form-inline col-xs-10" onSubmit = {this.searchText}>
                    <input  ref='id' className="form-control mb-3" placeholder="Type in your search word"/>
                    <button className="btn btn-success col-xs-2">Search</button>
                </form>
            </div>
        );
    }

}
