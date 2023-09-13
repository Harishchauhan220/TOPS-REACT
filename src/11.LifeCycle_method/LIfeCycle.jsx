import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import Unmount from './Unmount';

export default class LIfeCycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log("---constructor---");
    }

    updatecount() {
        this.setState({ count: this.state.count + 1 })
    }


    componentDidMount() {
        console.log("---component---");
    }

    componentDidUpdate() {
        if (this.state.count === 10) {
            alert("count is 10 !!!!!!!");
        }
        console.log("---componentDidUpdate---");
    }

    render() {
        console.log("---render---");
        return (
            <>
                <h1>LIfeCycle</h1>
                <h3>{this.state.count}</h3>
                {this.state.count < 10 && <Unmount/>}
                <button onClick={() => this.updatecount()}>INC</button>
            </>

        )
    }
}
 