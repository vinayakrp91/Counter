import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

increment= () =>{
    this.setState({ count : this.state.count + 1})
}

decrement = () => {
    this.setState({ count : this.state.count - 1})

}

resetCount = () => {
    this.setState({ count : 0})
}

setValue = (e) => {
    this.setState({ count: parseInt(e.target.value)})
}


     render(){
         return <div><button onClick={this.increment}>Increment</button>&nbsp;
         <button onClick={this.decrement}>Decrement</button><br/>
         <p>{this.state.count}</p>
         <button onClick={this.resetCount}>Reset Count</button><br/>
         <input type="number" onChange={this.setValue} value={this.state.count}></input>
         
         </div>

     
     }  
}
