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
        <div>
            <EditableSpan title={todolist.title} setNewItemHandler={changeTodolistTitle}/>
            <button onClick={deleteTodolist}>X</button>
            <AddItemForm addItemHandler={addNewTask}/>
            {tasksForRender}
            <div>
                <button onClick={() => changeTodolistFilter("all")}>All</button>
                <button onClick={() => changeTodolistFilter("active")}>Active</button>
                <button onClick={() => changeTodolistFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}