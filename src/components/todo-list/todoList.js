import React from 'react'
import TodoListItems from "../todo-list-items";

const style = {
    margin: '1rem auto'
}


export default class TodoList extends React.Component{
    render() {
        const { todosList, onDeleted, onToggleDone} = this.props
        const items = todosList.map(item => {
            return (
                <li className='list-group-item'
                    key={item.id}>
                    <TodoListItems {...item}
                                   onDelete={() => onDeleted(item.id)}
                                   onToggleDone={() => onToggleDone(item.id)}/>
                </li>
            )
        })

        return (
            <div className='container'
                 style={style}>
                <div className="row">
                    <div className='col-sm'>
                        <ul className='list-group'>
                            { items }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}