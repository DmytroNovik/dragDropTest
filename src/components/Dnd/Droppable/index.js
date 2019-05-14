import React, {Component} from 'react';

export default class Droppable extends Component {

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));
    };

    allowDrop = (e) => {
        e.preventDefault()
    };

    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}