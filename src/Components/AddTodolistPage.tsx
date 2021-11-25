import {AddItemForm} from "./AddItemForm";
import {useDispatch} from "react-redux";
import {addTodolistAC} from "../features/Todolists/todolist-reducer";
import React from "react";
import {Grid} from "@material-ui/core";

export const AddTodolistPage = () => {
    const dispatch = useDispatch()
    const addTodolist = (todolistTitle: string) => {
        dispatch(addTodolistAC(todolistTitle))
    }
    return (
            <Grid container style={{padding: "20px", justifyContent: "center"}}>
                <AddItemForm addItemHandler={addTodolist}/>
            </Grid>
    )
}