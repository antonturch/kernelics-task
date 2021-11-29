import {v1} from "uuid";
import {ADD_TODOLIST, addTodolistAC, DELETE_TODOLIST, deleteTodolistAC} from "./todolist-reducer";

const CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS" as const
const DELETE_TASK = "DELETE-TASK" as const
const ADD_TASK = "ADD-TASK" as const
const CHANGE_TASK_TITLE = "CHANGE-TASK-TITLE" as const

export type TaskType = {
    todolistId: string
    taskId: string
    title: string
    status: boolean
}
export type TasksType = {
    [key: string]: TaskType[]
}
type ActionsType =
    ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof deleteTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskTitleAC>
    | ReturnType<typeof deleteTodolistAC>
    | ReturnType<typeof addTodolistAC>


export const changeTaskStatusAC = (todolistId: string, taskId: string) => ({
    type: CHANGE_TASK_STATUS,
    todolistId,
    taskId,
})
export const deleteTaskAC = (todolistId: string, taskId: string) => ({
    type: DELETE_TASK,
    todolistId,
    taskId,
})
export const addTaskAC = (todolistId: string, newTaskTitle: string) => ({
    type: ADD_TASK,
    todolistId,
    newTaskTitle,
})
export const changeTaskTitleAC = (todolistId: string, taskId: string, newTaskTitle: string) => ({
    type: CHANGE_TASK_TITLE,
    todolistId,
    taskId,
    newTaskTitle,
})

const initTasksState: TasksType = {
    // [TODOLIST_ID1]: [
    //     {todolistId: TODOLIST_ID1, taskId: v1(), title: "11", status: false},
    //     {todolistId: TODOLIST_ID1, taskId: v1(), title: "12", status: false},
    //     {todolistId: TODOLIST_ID1, taskId: v1(), title: "13", status: false},
    // ],
    // [TODOLIST_ID2]:
    //     [
    //         {todolistId: TODOLIST_ID2, taskId: v1(), title: "21", status: false},
    //         {todolistId: TODOLIST_ID2, taskId: v1(), title: "22", status: false},
    //         {todolistId: TODOLIST_ID2, taskId: v1(), title: "23", status: false},
    //     ],
}

export const taskReducer = (state = initTasksState, action: ActionsType): TasksType => {
    switch (action.type) {
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => task.taskId === action.taskId ?
                    {...task, status: !task.status} : task)
            }
        case DELETE_TASK:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(
                    task => task.taskId !== action.taskId)
            }

        case ADD_TASK:
            const newTask: TaskType = {
                todolistId: action.todolistId,
                taskId: v1(),
                title: action.newTaskTitle,
                status: false,
            }
            return {
                ...state,
                [action.todolistId]: [newTask, ...state[action.todolistId]]
            }
        case CHANGE_TASK_TITLE: {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => task.taskId === action.taskId ?
                    {...task, title: action.newTaskTitle} : task)
            }
        }
        case DELETE_TODOLIST:
            const copyState = {...state}
            delete copyState[action.todolistId]
            return copyState
        case ADD_TODOLIST:
            return {[action.todolistId]: [], ...state}
        default:
            return state
    }
}