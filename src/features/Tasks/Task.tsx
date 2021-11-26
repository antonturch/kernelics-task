import React from "react";
import styles from "./Task.module.css"
import {TaskType} from "../../redux/reducers/task-reducer";
import {EditableSpan} from "../../Components/EditableSpan";
import {Checkbox} from "antd";
import {IconButton} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

type TaskPropsType = {
    task: TaskType
    setNewTaskTitle: (taskId: string, itemTitle: string) => void
    changeTaskStatus: (taskId: string) => void
    deleteTask: (taskId: string) => void
}
export const Task: React.FC<TaskPropsType> = ({task, setNewTaskTitle, deleteTask, changeTaskStatus}) => {

    const setNewTaskTitleHandler = (itemTitle: string) => {
        setNewTaskTitle(task.taskId, itemTitle)
    }
    const changeTaskStatusHandler = () => changeTaskStatus(task.taskId)
    const deleteTaskHandler = () => deleteTask(task.taskId)

    return (
        <li className={task.status ? styles.checked : ""} key={task.taskId}>
            <Checkbox checked={task.status}
                      onClick={changeTaskStatusHandler}/>
            <EditableSpan title={task.title} setNewItemHandler={setNewTaskTitleHandler}/>
            <IconButton aria-label="delete" size="small">
                <DeleteOutlinedIcon onClick={deleteTaskHandler}
                                    fontSize="small"/>
            </IconButton>
        </li>
    )
}