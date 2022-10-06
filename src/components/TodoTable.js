import React from 'react';

const TodoTable = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td>
                            <button onClick={() => props.delete(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;
