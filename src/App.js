import React, { Component } from 'react';
import './App.css';
import './components/Header/nav'
import Header from './components/Header/nav';
import TodoList from './components/TodoList/TodoList'
import InputText from './components/InputText/InputText'

class App extends Component {
  state = {
    todoItens: [
      { id: 1, title: "clear the house", description: "clear the entire house using the correct products" },
      { id: 2, title: "clear the room", description: "clear the fuck out your room" },
      { id: 3, title: "clear the car", description: "clear everything" },
      { id: 4, title: "clear the carpet", description: "clear everything" },
      { id: 5, title: "clear the bathroom", description: "clear everything" },
    ],
    newTitle: "",
    newDescription: ""
  }
  onClickDeleteItemBtnHandler = (event) => {
    let newState = this.state.todoItens.filter((item) => {
      return item.id != event.target.value
    })
    this.setState({ todoItens: newState })
  }

  onAddBtnClickHandler = (event) => {
    event.preventDefault();
    let newId = this.getLastId() + 1
    const newTask = { id: newId, title: this.state.newTitle, description: this.state.newDescription }
    let currentState = this.state.todoItens
    currentState.push(newTask)
    console.log(currentState)
    this.setState(currentState)
    this.setState({ newDescription: "" })
    this.setState({ newTitle: "" })
  }
  getLastId = () => {
    let ids = []
    this.state.todoItens.map(item => {
      ids.push(item.id)
    })
    return ids.length - 1
  }
  onTitleHandler = (event) => {
    console.log(event.target.value)
    this.setState({ newTitle: event.target.value })
  }
  onDescriptionHandler = (event) => {
    this.setState({ newDescription: event.target.value })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <InputText onDescription={this.onDescriptionHandler} onTitle={this.onTitleHandler} action={this.onAddBtnClickHandler}
          valueTitle={this.state.newTitle}
          valueDescription={this.state.newDescription} ></InputText>
        <hr />
        <TodoList onClickDeleteItemBtnHandler={this.onClickDeleteItemBtnHandler} listOfItens={this.state.todoItens}></TodoList>
      </div>
    );
  }
}

export default App;
