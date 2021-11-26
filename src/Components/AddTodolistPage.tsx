import {AddItemForm} from "./AddItemForm";
import {useDispatch} from "react-redux";
import {addTodolistAC} from "../redux/reducers/todolist-reducer";
import React from "react";
import {Grid} from "@material-ui/core";
import {v1} from "uuid";

export const AddTodolistPage = () => {

    const dispatch = useDispatch()
    const addTodolist = (todolistTitle: string) => {
        dispatch(addTodolistAC(v1(), todolistTitle))
    }

    return (
        <Grid container style={{padding: "20px", justifyContent: "center"}}>
            <AddItemForm addItemHandler={addTodolist} inputLabel={"New todolist"}/>
        </Grid>
    )
}