import React from 'react'

class Cell extends React.Component{

    constructor(props){
            super()
            this.state = {color: props.value}
            
        }
    
    clickHandler = () => {
        this.setState({ color: '#333' })
    }
        
        render(){
            
        return(
            <div onClick={this.clickHandler} className="cell" style={{backgroundColor: this.state.color}}>

            </div>
        )
    }
}

export default Cell