import React from 'react'
import TodoList from "../todoList";
import InputSearch from "../inputSearch";

const style = {
    margin: '3rem auto'
}

export default class App extends React.Component{
    uncId = 100
    constructor() {
        super();
        this.createItem = (label) => {
            return {
                label,
                done: false,
                id: this.uncId ++,
            }
        }

        this.state = {
            todosList: [
                this.createItem('Drink Coffee'),
                this.createItem('Make React app'),
                this.createItem('Make api for react app'),
            ]
        };

        this.deleteItem = (id) => {
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

        this.addItem = (text) => {
            const newTodo = this.createItem(text)
            this.setState(({todosList}) => {
                const newArr = [...todosList, newTodo]
                return {
                    todosList: newArr
                }
            })
        }

        this.onToggleDone = (id) => {
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