import React from 'react'

const TodoListDis = (props) => {

    const handleDelete = (deleteIdx)=> {
        const filteredList = props.TodoList.filter((eachItem, i)=> i !== deleteIdx)
        props.onUpdate(filteredList)
    }

    const handleUpdate = (e, updateIdx)=> {
        const listCopy = [...props.TodoList]
        listCopy[updateIdx].todoCompleted = e.target.checked
        props.onUpdate(listCopy)
    }

    return (
        <div>
            {
                props.TodoList.map((eachTodo, i) => {
                    return (
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p style={eachTodo.todoCompleted? {textDecoration: "line-through"}:{textDecoration:"none"}}>{eachTodo.todo}</p>
                            <input type="checkbox" checked={eachTodo.todoCompleted} onChange={(e) => handleUpdate(e, i)} />
                            <button onClick={()=>handleDelete(i)}> Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoListDis