import React from "react";
import style from "./Todolist.module.css";
import {AddItemForm} from "../../Components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    deleteTaskAC,
    TaskType
} from "../../redux/reducers/task-reducer";
import {
    changeFilterValueAC,
    changeTodolistTitleAC,
    deleteTodolistAC,
    FilterValueType,
    TodolistType
} from "../../redux/reducers/todolist-reducer";
import {Task} from "../Tasks/Task";
import {EditableSpan} from "../../Components/EditableSpan";
import {Button, IconButton, Paper, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import ButtonGroup from "@mui/material/ButtonGroup";

type TodolistPropsType = {
    todolist: TodolistType
}

export const Todolist: React.FC<TodolistPropsType> = ({todolist}) => {

    let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolist.id])
    const dispatch = useDispatch()

    const addNewTask = (inputValue: string) => {
        dispatch(addTaskAC(todolist.id, inputValue))
    }
    const changeTodolistFilter = (newFilterValue: FilterValueType) => {
        dispatch(changeFilterValueAC(todolist.id, newFilterValue))
    }
    const deleteTodolist = () => {
        dispatch(deleteTodolistAC(todolist.id))
    }
    const changeTodolistTitle = (newTodolistTitle: string) => {
        dispatch(changeTodolistTitleAC(todolist.id, newTodolistTitle))
    }

    const setNewTaskTitle = (taskId: string, itemTitle: string) => {
        dispatch(changeTaskTitleAC(todolist.id, taskId, itemTitle))
    }
    const changeTaskStatus = (taskId: string) => dispatch(changeTaskStatusAC(todolist.id, taskId))
    const deleteTask = (taskId: string) => dispatch(deleteTaskAC(todolist.id, taskId))

    const filtrationTasks = () => {
        let tasksAfterFilter;
        switch (todolist.filter) {
            case "active":
                tasksAfterFilter = tasks.filter(el => el.status === false)
                break
            case "completed":
                tasksAfterFilter = tasks.filter(el => el.status === true)
                break
            default:
                tasksAfterFilter = tasks
        }
        const tasksForRender = tasksAfterFilter.map(task => <Task key={task.taskId}
                                                                  task={task}
                                                                  setNewTaskTitle={setNewTaskTitle}
                                                                  changeTaskStatus={changeTaskStatus}
                                                                  deleteTask={deleteTask}/>);
        return tasksForRender
    }

    return (
        <Paper style={{padding: "20px"}} elevation={2}>
            <h3 style={{textAlign: "center"}}>
                <EditableSpan title={todolist.title} setNewItemHandler={changeTodolistTitle}/>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon onClick={deleteTodolist}
                                    fontSize="small"/>
                    </IconButton>
                </Tooltip>
            </h3>
            <AddItemForm addItemHandler={addNewTask} inputLabel={"New task"}/>
            <ButtonGroup className={style.buttonGroup} color="inherit" sx={{color: "#607d8b"}}
                         aria-label="small button group">
                <Button size="small" variant={todolist.filter === "all" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("all")}>All</Button>
                <Button size="small" variant={todolist.filter === "active" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("active")}>Active</Button>
                <Button size="small" variant={todolist.filter === "completed" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("completed")}>Completed</Button>
            </ButtonGroup>
            <ul className={style.tasksLi}>
                {filtrationTasks()}
            </ul>
        </Paper>
    )
}


