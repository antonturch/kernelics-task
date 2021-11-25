import React from "react";
import {Todolist} from "./Todolist";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {TodolistType} from "./todolist-reducer";

type PropsType = {}

export const TodolistsList: React.FC<PropsType> = () => {
    const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)
    return (
        <div>
            {todolists.map(el => {
                return <Todolist todolist={el}/>
            })}
        </div>
    )
}