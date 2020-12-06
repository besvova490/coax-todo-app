import React from 'react'
import TodoList from "../todo-list";
import InputSearch from "../input-search";

const style = {
    margin: '3rem auto'
}

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todosList: [
                this.createItem('Drink Coffee'),
            ]
        };

    }
    createItem = (label) => {
        return {
            label,
            done: false,
            id: Date.now(),
        }
    }

    deleteItem = (id) => {
        this.setState(({todosList}) => {
            const index = todosList.findIndex((el) => el.id === id)
            return {
                todosList: [
                    ...todosList.slice(0, index),
                    ...todosList.slice(index + 1)
                ]
            }
        })
    }

    addItem = (text) => {
        const newTodo = this.createItem(text)
        this.setState(({todosList}) => {
            const newArr = [...todosList, newTodo]
            return {
                todosList: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todosList}) => {
            const index = todosList.findIndex((el) => el.id === id)
            return {
                todosList: [
                    ...todosList.slice(0, index),
                    {...todosList[index], done: !todosList[index].done},
                    ...todosList.slice(index + 1)
                ]
            }
        })
    }

    render() {
        return(
            <div className='container'
                 style={style}>
                <InputSearch onAdded={this.addItem}/>
                <TodoList todosList={this.state.todosList}
                          onDeleted={this.deleteItem} onToggleDone={this.onToggleDone}/>
            </div>
        )
    }
}