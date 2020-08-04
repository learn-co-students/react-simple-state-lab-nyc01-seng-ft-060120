import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map((val, index) => {
      return <Cell key={index} value={val} />;
    })
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    console.log(this.props)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const row = [
      "#F00",
      "#f00",
      "#F00",
      "#f00",
      "#F00",
      "#f00",
      "#F00",
      "#f00",
      "#F00",
      "#f00",
    ];
    const array = []
    for(let i = 0; i < 10; i++) {
      array.push(row)
    } return array;
  })()
}
