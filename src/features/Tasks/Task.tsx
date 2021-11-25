import React from "react";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, TaskType} from "./task-reducer";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../../Components/EditableSpan";
import {Checkbox} from "antd";
import {IconButton} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

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
            <Checkbox checked={task.status}
                      onClick={() => {
                          dispatch(changeTaskStatusAC(task.todolistId, task.taskId))
                      }}/>
            <EditableSpan title={task.title} setNewItemHandler={setNewTaskTitleHandler}/>
            <IconButton aria-label="delete" size="small">
                <DeleteOutlinedIcon onClick={() => dispatch(deleteTaskAC(task.todolistId, task.taskId))}
                            fontSize="small"/>
            </IconButton>
        </li>
    )
}