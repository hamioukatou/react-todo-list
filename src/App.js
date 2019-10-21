import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false,
    disabled: true
  }

  handleChange = event => {
    this.setState({
      title: event.target.value,
      disabled: false
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.title,
    };

    console.log(newItem);
    let updatedItems = [];

    if (this.state.editItem) {
      //const filteredItems = this.state.items.filter(item => item.id !== this.state.id);
      const filteredItems = this.state.items.map(function (item, index) {
        if (item.id === newItem.id) {
          item.title = newItem.title;
        }
        return item;
      });

      updatedItems = filteredItems;
    } else {
      updatedItems = [...this.state.items, newItem];
    }

    this.setState({
      items: updatedItems,
      id: uuid(),
      title: '',
      editItem: false,
      disabled: true
    })
  };

  handleClearList = () => {
    this.setState({
      items: [],
    });
  }

  handleDeleteItem = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }

  handleEditItem = (id) => {
    const itemToEdit = this.state.items.find(item => item.id === id);
    this.setState({
      id: id,
      title: itemToEdit.title,
      editItem: true
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto md-col-8 mt-4">
            <h3 className="text-capitalize text-center"> todo input</h3>
            <TodoInput item={this.state} handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items} handleClearList={this.handleClearList}
              handleDeleteItem={this.handleDeleteItem}
              handleEditItem={this.handleEditItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
