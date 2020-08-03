import React from 'react'

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    render(){
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.click}></div>
        )
    }

    click = () => {
        this.setState({
            color: '#333'
        })
    }
}

export default Cell;