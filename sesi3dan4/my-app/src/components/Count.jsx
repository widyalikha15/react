import React, {Component} from 'react';

class Body extends Component {
    //buat constructor
    constructor(){
        super()
        //tentukan statenya
        this.state = {
            name: "widya",
            kelas: "12",
            counter: 0
        }
    }
    changeCount = type => {
        const oldCounter = this.state.counter

        // Ternary operator => periksa kondisi
        // format: [kondisi] ? [hasil jika true] : [hasil jika false]
        switch(type) {
            case 'increment':
                this.setState({
                    // format: [kondisi] ? [hasil jika true] : [hasil jika false]
                    counter: oldCounter > 10 ? 0 : oldCounter + 1
                })
                break
            case 'decrement':
                this.setState({
                    counter: oldCounter - 1
                })
                break
            default:
        }
    }
    render(){
        return (
            <>
                Halo {this.state.name} <br />
                Kelas {this.state.kelas}
                counter {this.state.counter}
                <button onClick={() => this.changeCount('increment')}>Tambah 1</button>
                <button onClick={() => this.changeCount('decrement')}>Kurang 1</button>
            </>
        )
    }
}

export default Body