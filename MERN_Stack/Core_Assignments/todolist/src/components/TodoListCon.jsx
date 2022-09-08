import React, { useState } from 'react'
import TodoListDisplay from './TodoListDisplay'
import TodoListForm from './TodoListForm'

const TodoListCon = () => {
    const [TodoList, setTodoList] = useState([])

    const TodoListRequest = (newRequest) => {
        setTodoList([...TodoList, newRequest])
    }

    const filterListFx = (deleteIdx)=>{
        const filteredList = TodoList.filter((eachItem, i)=> i !== deleteIdx)
        setTodoList(filteredList)
    }

    const updatedList = (updatedList) => {
        setTodoList(updatedList)
    }

    return (
        <div>
            <TodoListForm sendRequest={TodoListRequest}/>
            <TodoListDisplay 
                TodoList={TodoList} 
                onDelete={filterListFx} 
                onUpdate={updatedList}
                />
        </div>
    )
}

export default TodoListCon