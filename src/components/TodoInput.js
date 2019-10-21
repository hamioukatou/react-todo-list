import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className={item.editItem ? 'input-group-text bg-success text-white' : 'input-group-text bg-primary text-white'}>
                                <div className="fas fa-book"></div>
                            </div>
                        </div>
                        <input className="form-control text-capitalize" placeholder="add a todo item"
                            value={item.title} onChange={handleChange} />
                    </div>

                    <button className={item.editItem ? 'btn btn-block btn-success' : 'btn btn-block btn-primary'} disabled={item.disabled}>
                        {item.editItem ? 'edit item' : 'add item'}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;