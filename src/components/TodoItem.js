import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { item, deleteItem, editItem } = this.props;
        return (
            <div className="input-group">
                <input type="text" readOnly className="form-control" value={item.title} />
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={editItem}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button className="btn btn-outline-danger" type="button" onClick={deleteItem}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;