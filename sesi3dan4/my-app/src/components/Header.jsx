import React, {Component} from 'react';

//oop
// 4 karakteristik
// - obstacle
// - inheritence
// - encaptulation
// - polymorphis

class Header extends Component {
    //buat constructor
    constructor(){
        super()
        //tentukan statenya
        this.state = {
            name: "hahahahahha"
        }
    }
    render(){
        return (
            <a>
                Halo kelas FSD OCBC Batch ke-2 {this.state.name}
            </a>
        )
    }
}

export default Header