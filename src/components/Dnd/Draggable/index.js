import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {bindActionCreators} from "redux";
import * as actions from "../../../store/actions/dragDrop";
import {connect} from "react-redux";

class Draggable extends Component {

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    };

    noAllowDrop = (e) => {
        e.stopPropagation();
    };

    onDragEnd = (e) => {
        const {onDrag} = this.props.actions;
        const {item} = this.props;

        e.target.parentElement.id === 'visible' ? onDrag('visible', item) : onDrag('available', item)
    };

    render() {
        return (
            <div id={this.props.id} draggable='true' onClick={this.props.onClick} onDragStart={this.drag}
                 onDragOver={this.noAllowDrop} onDragEnd={this.onDragEnd} className={this.props.className}>
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

const mapStateToProps = state => ({
    available: state.dragDrop.available,
    visible: state.dragDrop.visible,
    fixed: state.dragDrop.fixed,
});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Draggable);