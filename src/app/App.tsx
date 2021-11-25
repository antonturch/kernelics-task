import React from "react";
import "./App.css";
import {TodolistsList} from "../features/Todolists/TodolistsList";
import {AddItemForm} from "../Components/AddItemForm";

function App() {
    return (
        <div>
            <AddItemForm addItemHandler={() => {}}/>
            <TodolistsList/>
        </div>
    )
}

export default App;
