import React, {Component} from 'react';
import './App.css';
import Apps from './components/Apps';

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }
//   tick(){
//     this.setState({
//       date: new Date()
//     })
//   }
//   componentDisMount(){
//     this.timerID = setInterval(()=> this.tick(), 1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerID)
//   }
//   render(){
//     return (
//       <div className="App-clock">
//         <h1>Realtime CLOCK</h1>
//         <hr/>
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//         <Apps/>
//       </div>
//     );
//   }
// }
// export default App;

// class component
class App extends Component {
    constructor() {
        super()
        this.state = {
          date: new Date()
        }
    }

    tick() {
        this.setState({
          date: new Date()
        })
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    render() {
        return (
          <div className="App-clock">
            <h1>Realtime Clock Class Componentrwe</h1>
            <hr />
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            <Apps/>
          </div>
        )
    }
}

export default App

