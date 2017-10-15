import React, {Component} from 'react';
import './App.css';

function hex2rgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            color: "#ffffff",
            value: "",
            rgb: [255, 255, 255]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleClick() {
        if (/^#([a-f]|\d){6}$/.test(this.state.value) === true) {
            this.setState({color: this.state.value});
            this.setState({rgb: hex2rgb(this.state.value)});
        } else {
            alert("Nieprawidowy format");
        }
    }

    render() {
        console.log(this.state);
        console.log(this.state);

        return (
            <div className="App-container">
                <div className="App-leftSight">
                    <h2>Enter a color</h2>
                    <input type="text" name="usrname" value={this.state.value} onChange={this.handleChange}/>
                    <button className="App-button" onClick={this.handleClick} type="submit">OK</button>
                </div>
                <div className="App-rightSight">
                    <h2>Selected Color</h2>
                    <div className="App-color-box" style={{backgroundColor: this.state.color}}>Color</div>
                    <h3>{this.state.color}</h3>
                    <h3>rgb({this.state.rgb[0]},{this.state.rgb[1]},{this.state.rgb[2]})</h3>
                </div>
            </div>
        );
    }

}
export default App;