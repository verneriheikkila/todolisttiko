import React, { useState, useRef } from 'react';
// import TodoTable from './TodoTable';
import { AgGridReact } from 'ag-grid-react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function Todolist() {
    const [todo, setTodo] = useState({
        description: '',
        priority: '',
    });
    const [date, setDate] = useState('');

    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const [columnDefs] = useState([
        {
            field: 'description',
            sortable: true,
            filter: true,
            floatingFilter: true,
        },
        { field: 'date', sortable: true, filter: true, floatingFilter: true },
        {
            field: 'priority',
            sortable: true,
            filter: true,
            floatingFilter: true,
            cellStyle: (params) =>
                params.value === 'High' ? { color: 'red' } : { color: 'black' },
        },
    ]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    };

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const deleteTodo = (index) => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(
                todos.filter(
                    (todo, index) =>
                        index !==
                        gridRef.current.getSelectedNodes()[0].childIndex
                )
            );
        } else {
            alert('No row selected!');
        }
    };

    return (
        <div>
            <h1>TODO list</h1>

            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={inputChanged}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    label="date"
                    value={date}
                    onChange={(e) => setDate(e)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <input
                type="text"
                name="priority"
                value={todo.priority}
                onChange={inputChanged}
            />
            <input type="button" value="Add" onClick={addTodo}></input>
            <input type="button" value="delete" onClick={deleteTodo}></input>
            <div
                className="ag-theme-material"
                style={{ margin: 'auto', width: '60%', height: 600 }}
            >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={(params) => (gridRef.current = params.api)}
                    rowSelection="single"
                    rowData={todos}
                    columnDefs={columnDefs}
                    animateRows={true}
                />
            </div>
        </div>
    );
}
export default Todolist;
