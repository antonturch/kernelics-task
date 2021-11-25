import {v1} from "uuid";

export const TODOLIST_ID1 = v1()
export const TODOLIST_ID2 = v1()
const CHANGE_FILTER_VALUE = "CHANGE-FILTER-VALUE" as const
export const DELETE_TODOLIST = "DELETE-TODOLIST" as const
export const ADD_TODOLIST = "ADD-TODOLIST" as const
const CHANGE_TODOLIST_TITLE = "CHANGE-TODOLIST-TITLE" as const

export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

export type FilterValueType = "all" | "active" | "completed"

type ActionsType = ReturnType<typeof deleteTodolistAC>
    | ReturnType<typeof changeFilterValueAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof changeTodolistTitleAC>

export const changeFilterValueAC = (todolistId: string,
                                    filterValue: FilterValueType) => ({
    type: CHANGE_FILTER_VALUE,
    todolistId,
    filterValue,
})

export const deleteTodolistAC = (todolistId: string) => ({
        type: DELETE_TODOLIST,
        todolistId,
    }
)

export const addTodolistAC = (todolistTitle: string) => ({
    type: ADD_TODOLIST,
    todolistId: v1(),
    todolistTitle,
})

export const changeTodolistTitleAC = (todolistId: string, newTodolistTitle: string) => ({
    type: CHANGE_TODOLIST_TITLE,
    todolistId,
    newTodolistTitle,
})

const initTodolistsState: TodolistType[] = [
    {id: TODOLIST_ID1, title: "First todolist", filter: "all",},
    {id: TODOLIST_ID2, title: "Second todolist", filter: "all",},
]
export const todolistReducer = (state = initTodolistsState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_FILTER_VALUE:
            return state.map(
                el => el.id === action.todolistId ? {...el, filter: action.filterValue} : el)
        case DELETE_TODOLIST:
            return state.filter(el => el.id !== action.todolistId)
        case ADD_TODOLIST:
            const newTodolist: TodolistType = {
                id: action.todolistId,
                title: action.todolistTitle,
                filter: "all"
            }
            return [newTodolist, ...state]
        case CHANGE_TODOLIST_TITLE:
            return state.map(
                el => el.id === action.todolistId ? {...el, title: action.newTodolistTitle} : el)
        default:
            return state
    }
}