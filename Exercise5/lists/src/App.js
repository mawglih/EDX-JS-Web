import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            lists: [], // this holds the name of each list
            items: {}, // this property names of this object are the names of the lists; their values are arrays of the items in each list
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
    }

    /**
     * This function takes the state of an AddList component as its parameter
     * and updates the state of this App component by adding a new entry to the "lists"
     * array and then adding a new property in the "items" object that has the same name
     * as the value put into the "lists" array. It should then re-render this App component.
     */
    handleAddList(s) {
        // Implement this function!
        this.lists = this.state.lists;
        this.items = this.state.items;
        console.log('lists before ', this.lists);
        console.log('items array before in app', this.items);
        this.setState ({listName: s}, () =>{
          // var newItem = this.state.listName;
          // console.log('newitem', newItem);
          this.lists = this.state.lists.push(this.state.listName); 
        });
        //this.setState({lists : this.state.lists.concat(newItem)});
        
    }
    
    componentDidUpdate () {
      this.handleAddItem(this.lists);
      console.log('lists here ', this.state.lists);
      console.log('items array in app', this.state.items);
    }
      
    // {this.state.articles.map(function(article){
    //       return <Article article={article} key={article._id}
    /**
     * This function takes the state of an AddItem component as its parameter
     * and updates the state of this App component by adding a new value to the 
     * appropriate array in the "items" property of the state. Keep in mind that
     * the property names of "items" are the names of each list, which is mapped
     * to an array of the items in that list. After updating the "items" part of 
     * the state, this function  should then re-render this App component.
     */
    handleAddItem(s) {
      var listItem = [];
      var items = this.state.items;
      for(var i = 0; i < s.length; i++) {
        items[i]={itemName:s[i], key:listItem};
      }
      
        // Implement this function!
        // this.setState({itemName: s}, () => {
        //   this.items = this.state.items.push(this.state.itemName);
        //   console.log('item here ', this.state.items);
        // })
    }

    /**
     * Renders the component.
     */
    render() {
        return ( <div className = "App">
            <AddList addList = { this.handleAddList }/>
            <div id = "listsDiv" className = "List" >
            <Lists lists = { this.state.lists } items = { this.state.items }
            addItem = { this.handleAddItem }/> 
            </div> 
            </div>
        );
    }

}

export default App;