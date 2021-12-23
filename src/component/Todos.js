import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import {TodoistApi} from "@doist/todoist-api-typescript";

const Todos = () => {

    const api = new TodoistApi('882db70968dc7cf337635aa5227ac52c4cfed484')
    const [todos, setTodos] = useState([])

    useEffect(() => {
        api.getTasks()
            .then(todos => setTodos(todos))
    });


    const onAddHandler = (content) => {
        api.addTask({content})
            .then(res => console.log(res))
    }

    const onDeleteHandler = (id) => {

        api.deleteTask(id)
            .then(res => console.log(res))

    }

    const onCheckHandler = (id) => {
         api.closeTask(id).then(res => console.log(res))
    }

    const onUpdateHandler = (id, content) => {

        api.updateTask(id, {content}).then(res => console.log(res))
    }

    const todosList = todos.map((todo) => {
        return <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            onCheck={onCheckHandler}
            onDelete={onDeleteHandler}
            onUpdate={onUpdateHandler}
        />
    })

    return (<div className='center-align'>
        <TodoForm ц onAdd={onAddHandler}/>
        <ul>{todosList}</ul>
    </div>);
};

export default Todos;
