import React from "react";

import "./clock.scss"

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    render() {
        return (
                <div className="glass-card clock_container">
                    <div className="clock_text">
                        {this.state.time}
                    </div>
                </div>
        )
    }
}

export default Clock;