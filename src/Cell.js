import React, { Component } from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    setNewColor = () => this.setState({color: '#333'})

    render() {
        return (<div onClick={this.setNewColor} className="cell" style={{backgroundColor: this.state.color}}></div>)
    }
}