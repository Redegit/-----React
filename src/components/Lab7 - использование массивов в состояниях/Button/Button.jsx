
import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Нажми" };

        this.handlePress = this.handlePress.bind(this);

        console.log("constructor");
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    handlePress = () => {
        console.log(this);
    }


    render() {
        return (
            <button onClick={this.handlePress}>Button</button>
        )
    }
}
