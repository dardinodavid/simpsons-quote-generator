import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a id={this.props.id} className="btn btn-primary" onClick={this.props.clicked} href={this.props.link} target={this.props.linkTarget}>
                  <span className="icons">
                    <i className={this.props.icon} />
                  </span>
                 {this.props.text}
                </a>
        );
    }
}

export default Button;

