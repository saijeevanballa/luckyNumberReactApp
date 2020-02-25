import React, { Component } from "react";

class navbar extends Component {
    static defaultProps = {
        title: "lucky Number"
    }
    
    render() {
        return (<div>
            <nav className="navbar bg-primary" > <i class="fas fa-users">{this.props.title}</i></nav>
        </div>)
    }
};

export default navbar;