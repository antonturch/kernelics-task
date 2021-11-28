import React, {useCallback} from "react";
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
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";

type TodolistPropsType = {
    todolist: TodolistType
}

export const Todolist: React.FC<TodolistPropsType> = React.memo(({todolist}) => {

        let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolist.id])
        const dispatch = useDispatch()

        const addNewTask = useCallback((inputValue: string) => {
            dispatch(addTaskAC(todolist.id, inputValue))
        }, [dispatch, todolist.id])
        const changeTodolistFilter = useCallback((newFilterValue: FilterValueType) => {
            dispatch(changeFilterValueAC(todolist.id, newFilterValue))
        }, [dispatch, todolist.id])
        const deleteTodolist = useCallback(() => {
            dispatch(deleteTodolistAC(todolist.id))
        }, [dispatch, todolist.id])
        const changeTodolistTitle = useCallback((newTodolistTitle: string) => {
            dispatch(changeTodolistTitleAC(todolist.id, newTodolistTitle))
        }, [dispatch, todolist.id])
        const setNewTaskTitle = useCallback((taskId: string, itemTitle: string) => {
            dispatch(changeTaskTitleAC(todolist.id, taskId, itemTitle))
        }, [dispatch, todolist.id])
        const changeTaskStatus = useCallback(
            (taskId: string) => dispatch(changeTaskStatusAC(todolist.id, taskId)),
            [dispatch, todolist.id])
        const deleteTask = useCallback((taskId: string) => dispatch(deleteTaskAC(todolist.id, taskId)),
            [dispatch, todolist.id])

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
            return tasksAfterFilter.map(task => <Task key={task.taskId}
                                                      task={task}
                                                      setNewTaskTitle={setNewTaskTitle}
                                                      changeTaskStatus={changeTaskStatus}
                                                      deleteTask={deleteTask}/>);
        }

        return (
            <div className={style.todolist}>
                <h3 style={{textAlign: "center"}}>
                    <EditableSpan title={todolist.title} setNewItemHandler={changeTodolistTitle}/>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon onClick={deleteTodolist}
                                        fontSize="small"/>
                        </IconButton>
                    </Tooltip>
                </h3>
                <AddItemForm addItemHandler={addNewTask} type={"task"}/>
                <div className={style.task_controls}>
                    <button className={todolist.filter === "all" ? style.btn_active : ""}
                            onClick={() => changeTodolistFilter("all")}>All
                    </button>
                    <button className={todolist.filter === "active" ? style.btn_active : ""}
                            onClick={() => changeTodolistFilter("active")}>Active
                    </button>
                    <button className={todolist.filter === "completed" ? style.btn_active : ""}
                            onClick={() => changeTodolistFilter("completed")}>Completed
                    </button>
                </div>
                <ul className={style.task_list}>
                    {filtrationTasks()}
                </ul>
            </div>
        )
    }
)

