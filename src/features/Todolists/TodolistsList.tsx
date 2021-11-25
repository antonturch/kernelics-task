import React from "react";
import {Todolist} from "./Todolist";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {TodolistType} from "./todolist-reducer";
import {Grid} from "@mui/material";

type PropsType = {}

export const TodolistsList: React.FC<PropsType> = () => {
    const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)
    return (
        <Grid container spacing={3} style={{justifyContent: "center"}}>
            {todolists.map(el => {
                return <Grid item maxWidth={"400px"} key={el.id} ><Todolist todolist={el}/></Grid>
            })}
        </Grid>
    )
}