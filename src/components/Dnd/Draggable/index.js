import React, {Component} from 'react';
import Proptypes from 'prop-types';

export default class Draggable extends Component {

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    };

    noAllowDrop = (e) => {
        e.stopPropagation();
    };

    render() {
        return (
            <div id={this.props.id} draggable='true' onClick={this.props.onClick} onDragStart={this.drag} onDragOver={this.noAllowDrop} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: Proptypes.string,
    style: Proptypes.object,
    children: Proptypes.node,
};