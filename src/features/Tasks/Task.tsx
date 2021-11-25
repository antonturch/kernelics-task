import React from "react";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, TaskType} from "./task-reducer";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../../Components/EditableSpan";

type PropsType = {
    task: TaskType
}
export const Task: React.FC<PropsType> = ({task}) => {

    const dispatch = useDispatch();
    const setNewTaskTitleHandler = (itemTitle: string) => {
        dispatch(changeTaskTitleAC(task.todolistId, task.taskId, itemTitle))
    }
    return (
        <li key={task.taskId}>
            <input type="checkbox" checked={task.status}
                   onClick={() => {
                       dispatch(changeTaskStatusAC(task.todolistId, task.taskId))
                   }}/>
            <EditableSpan title={task.title} setNewItemHandler={setNewTaskTitleHandler}/>
            <button onClick={() => dispatch(deleteTaskAC(task.todolistId, task.taskId))}>x</button>
        </li>
    )
}