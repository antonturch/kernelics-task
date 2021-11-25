import {AddItemForm} from "./AddItemForm";
import {useDispatch} from "react-redux";
import {addTodolistAC} from "../features/Todolists/todolist-reducer";
import React from "react";

export const AddTodolistPage = () => {
    const dispatch = useDispatch()
    const addTodolist = (todolistTitle: string) => {
        dispatch(addTodolistAC(todolistTitle))
    }
    return (
        <div>
            <AddItemForm addItemHandler={addTodolist}/>
        </div>
    )
}