import React from "react";
import {Todolist} from "./Todolist";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TodolistType} from "../../redux/reducers/todolist-reducer";
import {Grid} from "@mui/material";


export const TodolistsList = React.memo(() => {
        const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)

        return (
            <Grid container spacing={3} style={{justifyContent: "center"}}>
                {todolists.map(
                    tdl => <Grid item maxWidth={"400px"} key={tdl.id}><Todolist todolist={tdl}/>
                    </Grid>
                )}
            </Grid>
        )
    }
)