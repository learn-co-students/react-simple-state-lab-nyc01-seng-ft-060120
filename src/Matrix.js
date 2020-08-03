import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const genDefaultVals = () => {
  let tempMatrix = []
  for (let x=0; x<10; x++) {
    const tempAr = []
    for (let x=0; x<10; x++) {
      tempAr.push("#F00")
    }
    tempMatrix.push(tempAr)
  }
  return tempMatrix
}

Matrix.defaultProps = {
  values: genDefaultVals()
}