import React, {Component} from 'react';

class Prop extends Component {
    //buat constructor
    constructor(props){
        super(props)
        //tentukan statenya
        this.state = {
            name: "widya",
            kelas: "12"
        }
    }
    changeProp = () => {
        console.log()
        this.setState({
            name: 'widya new'
        })
    }
    render(){
        return (
            <div>
                <h1>Batch{this.props.batch}</h1>
                <img src={this.props.logo} alt="logo" />
            </div>
        )
    }
}

export default Prop
