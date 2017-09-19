class FontChooser extends React.Component {
    
        constructor(props) {
        super(props);
        this.state = { 
            hidden: true,
            checkBoxValue: props.bold, 
            size: parseInt(props.size), 
            min: parseInt(props.min), 
            max: parseInt(props.max), 
            color: 'black'
        };
        this.toggleView = this.toggleView.bind(this);
        this.boxIsChecked = this.boxIsChecked.bind(this);
        this.decreaseSize = this.decreaseSize.bind(this);
        this.increaseSize = this.increaseSize.bind(this);
        this.resetAll = this.resetAll.bind(this);
        //this.checkBooleanValue = this.checkBooleanValue.bind(this);
        }
        
        
        toggleView(){
            this.setState( {
                hidden: !this.state.hidden
            });
            console.log('hidden', this.state);
        }
        boxIsChecked() {
            this.setState( {
                checkBoxValue: !this.state.checkBoxValue,
            });
            console.log('checked' ,this.state);
        }
        decreaseSize() {
            if(this.state.size > this.state.min) {
                this.setState({
                    size: this.state.size - 1,
                    color: 'black'
                });
            }if(this.state.size == this.state.min + 1) {
                this.setState({
                    color:'red'
                });
            }
        }
                
        increaseSize() {
            if(this.state.size < this.state.max){
                this.setState({
                    size: this.state.size + 1,
                    color: 'black'
                });
            }if(this.state.size == this.state.max -1) {
                this.setState({
                    color: 'red'
                });
            }
        }
    
        resetAll() {
            this.setState({
                size: parseInt(this.props.size)
            });
        }
    
        render() {
            var weight = this.state.checkBoxValue ? 'normal' : 'bold';
            //var checkedBox = this.state.checkBoxValue ? true : false;
            var size = this.state.size;
            var fontColor = this.state.color;
    
        return(
               <div >
                <input type="checkbox" 
                    checked ={this.state.checkBoxValue  ? false : true}
                    value={this.state.checkBoxValue}
                    onChange={this.boxIsChecked}
                    id="boldCheckbox" 
                    hidden = {this.state.hidden ? true : false }
                />
                <button 
                    onClick={this.decreaseSize}
                    id="decreaseButton" 
                    hidden = {this.state.hidden ? true : false }>
                    -
                </button>
                <span 
                    style={{color: fontColor}}
                    onDoubleClick={this.resetAll}
                    id="fontSizeSpan" 
                    hidden = {this.state.hidden ? true : false }>
                    {this.state.size}
                </span>
                <button 
                    onClick={this.increaseSize}
                    id="increaseButton"
                    hidden = {this.state.hidden ? true : false }>
                    +
                </button>
                <span
                    id="textSpan" 
                    style={{fontWeight:weight, fontSize: size, color: fontColor}} 
                    onClick={this.toggleView}>
                    {this.props.text}
                </span>
               </div>
        );
        }
    }
    
    