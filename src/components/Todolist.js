import React, { useState } from 'react';
import TodoTable from './TodoTable';

function Todolist() {
    const [todo, setTodo] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    };

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div className="App">
            <h1>TODO list</h1>
            <form onSubmit={addTodo}>
                <input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={inputChanged}
                />
                <input
                    type="desription"
                    name="description"
                    value={todo.description}
                    onChange={inputChanged}
                />
                <input type="submit" value="Add" />
            </form>
            <TodoTable todos={todos} delete={deleteTodo} />
        </div>
    );
}
export default Todolist;
