import React from "react";
import {changeTaskStatusAC, deleteTaskAC, TaskType} from "./task-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    task: TaskType
}
export const Task: React.FC<PropsType> = ({task}) => {

    const dispatch = useDispatch();

    return (
        <li key={""}>
            <input type="checkbox" checked={task.status}
                   onClick={() => {
                       dispatch(changeTaskStatusAC(task.todolistId, task.taskId))
                   }}/>
            {task.title}
            <button onClick={() => dispatch(deleteTaskAC(task.todolistId, task.taskId))}>x</button>
        </li>
    )
}