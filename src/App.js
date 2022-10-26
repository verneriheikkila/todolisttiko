import './App.css';
import Todolist from './components/Todolist';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import React from 'react';

function App() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="App">
            <BrowserRouter>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab component={Link} to="/" label="Home" />
                    <Tab component={Link} to="/todos" label="Todo" />
                </Tabs>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/todos" element={<Todolist />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
