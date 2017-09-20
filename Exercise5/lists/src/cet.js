class App extends React.Component {
    constructor (){
        super();
        this.state = {
            items : []
        };
  
        // bind addTodo once in constructor
        this.addTodo = this.addTodo.bind(this); 
    }
  
    // addTodo will receive the needed value without refs
    addTodo (heading){
  
      // concat returns a new array
      const items = this.state.items.concat({
        heading,
        key: Date.now()
      });
  
      this.setState({ items });
    }
    render() {
      return (
        <div className="app-container">
          <InputForm onSubmit={this.addTodo}></InputForm>
          <TodoItems entries={this.state.items} />
        </div>
      );
    }
  }
  
  class InputForm extends React.Component {
    constructor(props) {
      super(props);
  
      // bind onSubmit and onInput
      this.onSubmit = this.onSubmit.bind(this);
      this.onInput = this.onInput.bind(this);
  
      // init state
      this.state = {
        input: ''
      };
    }
  
    // input change handler
    onInput(e) {
      this.setState({
        input: e.target.value
      });
    }
  
    // submit handler
    onSubmit() {
      this.props.onSubmit(this.state.input);
    }
  
    render (){
      return (
        <form onSubmit={this.onSubmit}>
          <input
            // use value and onChange so it will be a controlled component
            value={ this.state.value }
            onChange={ this.onInput }
            type="text"
            placeholder="Type your text here" />
          <button type="submit">Add to list</button>
        </form>
      )
    }
  }