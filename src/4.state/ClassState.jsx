import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ClassState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        };
        this.x = 0;

    }

    inc() {
        this.x++;
        this.setState({ count: this.state.count + 1 })
        console.log("this.x = ", this.x);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Button onClick={() => this.inc()} color="danger">
                    Increment
                </Button>
            </div>
        )
    }
}
