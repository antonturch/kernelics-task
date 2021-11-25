import React from "react";
import "./App.css";
import {TodolistsList} from "../features/Todolists/TodolistsList";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {AddTodolistPage} from "../Components/AddTodolistPage";
import {Button} from "antd";

function App() {
    return (
        <BrowserRouter>
            <NavLink to="/add">Add new todolist</NavLink>
            <NavLink to="/todolists">Todolist page</NavLink>
            <Button >dqdqw</Button>
            <Routes>
                <Route path="/add" element={<AddTodolistPage/>}/>
                <Route path="/todolists" element={<TodolistsList/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
