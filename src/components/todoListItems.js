import React from 'react'
import './todo-list-items.css'

export default class TodoListItems extends React.Component{
    render() {
        const {done, label, onDelete, onToggleDone} = this.props
        let classList = ''
        if (done) {
            classList += 'done'
        }
        return (
            <span className='main-span'>
                <span onClick={onToggleDone} className={classList}>
                    {label || 'No todo'}
                </span>
                <button type='button'
                        className="btn btn-light todo-span-button"
                        onClick={onDelete}>
                    <i className="fa fa-trash-o span-i-trash"
                       aria-hidden="true"/>
                </button>
            </span>
        )
    }
}