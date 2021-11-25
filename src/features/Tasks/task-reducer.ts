import {v1} from "uuid";
import {TODOLIST_ID1, TODOLIST_ID2} from "../Todolists/todolist-reducer";

const CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS" as const
const DELETE_TASK = "DELETE-TASK" as const
const ADD_TASK = "ADD-TASK" as const


export type TaskType = {
    todolistId: string
    taskId: string
    title: string
    status: boolean
}

export type TasksType = {
    [key: string]: TaskType[]
}

type ChangeTaskStatusACType = {
    type: "CHANGE-TASK-STATUS"
    todolistId: string
    taskId: string
}
type DeleteTaskACType = {
    type: "DELETE-TASK"
    todolistId: string
    taskId: string
}

type AddTaskACType = {
    type: "ADD-TASK"
    todolistId: string
    newTaskTitle: string
}


type ActionsType = ChangeTaskStatusACType | DeleteTaskACType | AddTaskACType

export const changeTaskStatusAC = (todolistId: string, taskId: string): ChangeTaskStatusACType => ({
    type: CHANGE_TASK_STATUS,
    todolistId,
    taskId,
})

export const deleteTaskAC = (todolistId: string, taskId: string): DeleteTaskACType => ({
    type: DELETE_TASK,
    todolistId,
    taskId,
})
export const addTaskAC = (todolistId: string, newTaskTitle: string): AddTaskACType => ({
    type: ADD_TASK,
    todolistId,
    newTaskTitle,
})

const initTasksState = {
    [TODOLIST_ID1]: [
        {todolistId: TODOLIST_ID1, taskId: v1(), title: "11", status: false},
        {todolistId: TODOLIST_ID1, taskId: v1(), title: "12", status: false},
        {todolistId: TODOLIST_ID1, taskId: v1(), title: "13", status: false},
    ],
    [TODOLIST_ID2]:
        [
            {todolistId: TODOLIST_ID2, taskId: v1(), title: "21", status: false},
            {todolistId: TODOLIST_ID2, taskId: v1(), title: "22", status: false},
            {todolistId: TODOLIST_ID2, taskId: v1(), title: "23", status: false},
        ],
}


export const taskReducer = (state: TasksType = initTasksState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(
                    el => el.taskId === action.taskId ? {...el, status: !el.status} : el)
            }
        case DELETE_TASK:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el => el.taskId !== action.taskId)
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
        default:
            return state
    }
}