import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            value: ""
        }
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggle(){
        if(this.state.toggle && this.state.value.length === 0){
            this.setState({toggle: !this.state.toggle}); // Switch the toggle to false if search is clicked with empty value
        }
        else if (this.state.toggle && this.state.value.length !== 0) { //Trigger the search
            this.props.searchTicker(this.state.value)
            this.setState({toggle: false, value:""});
        }
        else { //Display the searchbar
            this.setState({toggle: true});
        }
    }
    onChange(e){
        this.setState({value: e.target.value});
    }
    render() {
        return <div className="inline navbar" style={{ float: "right", marginTop: "2px" }}>
            {this.state.toggle ? <input className="inline" value={this.state.value} onChange={this.onChange} hint="Enter a ticker" /> : <input hidden value={this.state.value} onChange={this.onChange} hint="Enter a ticker" />}
            <img className="icon inline" alt="Search Ticker" src={require("../img/search.png")} onClick={() => this.toggle()}/>
          </div>;
    }

}