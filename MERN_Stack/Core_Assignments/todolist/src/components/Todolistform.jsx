import React, { useState } from 'react'

const TodoListForm = (props) => {
    const [todo, setTodo] = useState("");
    const [todoCompleted, setTodoFinished] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewTodo(todo, todoCompleted)
        setTodo("")
        setTodoFinished(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>To Do:</label>
                    <input type="text" name="todo" value={todo} onChange={handleTodo} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoListForm