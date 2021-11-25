import React from "react";
import {AddItemForm} from "../../Components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {addTaskAC, TaskType} from "../Tasks/task-reducer";
import {
    changeFilterValueAC,
    changeTodolistTitleAC,
    deleteTodolistAC,
    FilterValueType,
    TodolistType
} from "./todolist-reducer";
import {Task} from "../Tasks/Task";
import {EditableSpan} from "../../Components/EditableSpan";
import {Button, IconButton, Paper, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import ButtonGroup from "@mui/material/ButtonGroup";


type PropsType = {
    todolist: TodolistType
}
export const Todolist: React.FC<PropsType> = ({todolist}) => {
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
    const tasksForRender = tasksAfterFilter.map(el => <Task key={el.taskId} task={el}/>);


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
            <AddItemForm addItemHandler={addNewTask}/>
            <ButtonGroup color="inherit" sx={{color: "#607d8b"}} aria-label="small button group">
                <Button size="small" variant={todolist.filter === "all" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("all")}>All</Button>
                <Button size="small" variant={todolist.filter === "active" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("active")}>Active</Button>
                <Button size="small" variant={todolist.filter === "completed" ? "contained" : "outlined"}
                        onClick={() => changeTodolistFilter("completed")}>Completed</Button>
            </ButtonGroup>
            <ul>
                {tasksForRender}
            </ul>
        </Paper>
    )
}


