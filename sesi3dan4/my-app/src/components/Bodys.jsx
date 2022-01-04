import React, {Component} from 'react';

class Body extends Component {
    //buat constructor
    constructor(){
        super()
        //tentukan statenya
        this.state = {
            name: "widya",
            kelas: "12"
        }
    }
    changeName = () => {
        this.setState({
            name: 'widya new'
        })
    }
    render(){
        return (
            <>
                Halo {this.state.name} <br />
                Kelas {this.state.kelas}
                <button onClick={this.changeName}>Ganti nama</button>
            </>
        )
    }
}

export default Body