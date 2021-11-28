import React from "react";
import styles from "./Task.module.css"
import {TaskType} from "../../redux/reducers/task-reducer";

type TaskPropsType = {
    task: TaskType
    setNewTaskTitle: (taskId: string, itemTitle: string) => void
    changeTaskStatus: (taskId: string) => void
    deleteTask: (taskId: string) => void
}
export const Task: React.FC<TaskPropsType> = React.memo(
    ({task, setNewTaskTitle, deleteTask, changeTaskStatus}) => {

        // const setNewTaskTitleHandler = (itemTitle: string) => {
        //     setNewTaskTitle(task.taskId, itemTitle)
        // }
        const changeTaskStatusHandler = () => changeTaskStatus(task.taskId)
        const deleteTaskHandler = () => deleteTask(task.taskId)

        return (

            <li className={styles.task_list} key={task.taskId}>
                <input type="checkbox" checked={task.status} onChange={changeTaskStatusHandler}
                />
                <label onClick={changeTaskStatusHandler}>{task.title}
                    <span className={styles.task_strike}></span>
                </label>
                {/*<EditableSpan title={task.title} setNewItemHandler={setNewTaskTitleHandler}/>*/}
                <button
                    className={styles.task_item_remove}
                    onClick={deleteTaskHandler}>
                    <svg viewBox="0 0 40 40">
                        <path d="M15 15 L25 25 M25 15 L15 25"/>
                    </svg>
                </button>
            </li>
        )
    }
)