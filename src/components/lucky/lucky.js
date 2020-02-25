import React, { Component } from 'react'

export class lucky extends Component {
    constructor(props) {
        super(props)
        this.state = {
            luckyNum: Math.floor(Math.random() * 100) + 1,
            yourNum: undefined,
            message: "Value must be in 1 to 100 🧐",
            count: "!",
            time: this.props.time || 0
        }
    }

    logTime() {
        this.setState({
            time: this.state.time + 1
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.logTime(), 1000);
    }

    onchange = (e) => {
        e.preventDefault();
        let myValue = this.refs.myNum.value
        console.log(this.refs.myNum.value)
        let newMessage
        if (myValue < 1 || myValue > 100) {
            newMessage = "Expected value must be in 1 to 100 🤭"
        } else if (isNaN(myValue)) {
            newMessage = "Please enter valid number 😳"
        } else if (myValue == this.state.luckyNum) {
            clearInterval(this.interval)
            newMessage = "Congratulations 😎"
        } else if (myValue < this.state.luckyNum) {
            newMessage = "Your number less than what i am think 😡"
        } else {
            newMessage = "Your number greater than what i am think 🤬"
        }
        this.setState({ yourNum: e.target.value, message: newMessage, count: !isNaN(this.state.count) ? Number(this.state.count) + 1 : 1 })
        console.log(this.state.luckyNum)
    }

    reset = () => window.location.reload()

    render() {
        return (
            <div className="card mydiv" style={{ width: "500px", align: "center" }}>
                <form onSubmit={this.onchange} >
                    <h2 style={{ textAlign: "center" }}>Try Your Luck - {this.state.time} sec</h2>
                    <input type="text" name="yourNum" value={this.state.yourNum} ref="myNum" style={{ borderRadius: "25px" }}></input>
                    {(this.state.message == "Congratulations 😎") ? 
                        <input type="submit" className="btn btn-block btn-dark" value={`It take ${this.state.count} chance and ${this.state.time} sec Time, Reset 🤧`} onClick={this.reset}></input> :
                        <input type="submit" value={"submit " + this.state.count} className="btn btn-block btn-dark" ref="countNum"></input>}
                </form><br />
                <h2 style={{ textAlign: "center" }}>{this.state.message}</h2>

            </div>
        )
    }
}

export default lucky
