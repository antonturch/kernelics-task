import React from "react";
import {TodolistsList} from "../features/Todolists/TodolistsList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddTodolistPage} from "../Components/AddTodolistPage";
import {HeaderNavlinkButtons} from "../Components/headerNavlinkButtons/HeaderNavlinkButtons";

function App() {

    return (
        <BrowserRouter>
            <HeaderNavlinkButtons/>
            <Routes>
                <Route path="/add" element={<AddTodolistPage/>}/>
                <Route path="/todolists" element={<TodolistsList/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
