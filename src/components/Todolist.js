import React, { useState } from 'react';

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
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Todolist;
//tehtävässä description ja pvm samaan olioon.
