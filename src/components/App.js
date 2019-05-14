import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import '../App.scss';
import Button from '@material-ui/core/Button';
import Draggable from '../components/Dnd/Draggable'
import Droppable from '../components/Dnd/Droppable'
import * as actions from '../store/actions/dragDrop'

class App extends Component {

    onSave = () => {
        const {fixed, visible} = this.props;
        alert('Here gonna be backend method to save data: check console ');
        console.log('Fixed: ', fixed, "Visible: ", visible, 'Count of Visible Columns: ', visible.length)
    };

    render() {
        const {available, fixed, visible} = this.props;
        const {makeFixed} = this.props.actions;

        return (
            <div className='App'>
                <div className='main-page'>
                    <h1>Configure Data Fields</h1>
                    <h3>Drag & drop between columns to configure visible data.</h3>
                    <div className='wrapper'>
                        <div className='available-column'>
                            <h4>Available ({available.filter(item => !visible.includes(item)).length} items)</h4>
                            <Droppable id='available' className='droppable droppable-with-border'>
                                {available.map(item => (
                                        <Draggable item={item} key={item.id} onDoubleClick={() => visible.includes(item) ? makeFixed(visible.indexOf(item), item.id) : null}
                                                   className={`${fixed.find(fixed => fixed.id === item.id) !== undefined ?
                                                       'fixed' : 'not-fixed'} droppable-item`}
                                                   id={item.id}>{item.name}</Draggable>
                                    )
                                )}
                            </Droppable>
                        </div>
                        <div className='visible-column'>
                            <h4>Visible ({visible.length} items) / Fixed ({fixed.length} items)</h4>
                            <Droppable id='visible' className='droppable'/>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Button variant="contained" color="primary" onClick={this.onSave}>Save</Button>
                        <Button variant="contained" onClick={() => window.location.reload()}>Cancel</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    available: state.dragDrop.available,
    visible: state.dragDrop.visible,
    fixed: state.dragDrop.fixed,
});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);
