import React, {Component} from 'react';

class Change extends Component {
    //buat constructor
    constructor(){
        super()
        //tentukan statenya
        this.state = {
            name: "widya",
            kelas: "12"
        }
    }
    changeName = (newName) => {
        this.setState({
            name: this.state.name + ' widya'
        })
    }
    render(){
        return (
            <>
                Halo {this.state.name} <br />
                <button onClick={this.changeName}>Ganti nama</button>
            </>
        )
    }
}

export default Change