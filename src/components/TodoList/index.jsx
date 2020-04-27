import React from 'react'
import PropTypes from 'prop-types'

function Todolist(props) {

    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }

    const { todos, onTodoClick } = props;
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => handleClick(todo)}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
}

Todolist.defaultProps = {
    todos: [],
    onTodoClick: null,
}

export default Todolist

