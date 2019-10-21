import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const { items, handleClearList, handleDeleteItem, handleEditItem } = this.props;
        return (
            <div>
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                {
                    items.map(item => {
                        return <TodoItem key={item.id} item={item}
                            deleteItem={() => handleDeleteItem(item.id)}
                            editItem={() => handleEditItem(item.id)}
                        />
                    })
                }
                <button className="btn btn-danger btn-block text-capitalize mt-5" onClick={handleClearList}>
                    clear list
                </button>
            </div>
        );
    }
}

export default TodoList;