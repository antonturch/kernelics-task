import {v1} from "uuid";

export const TODOLIST_ID1 = v1()
export const TODOLIST_ID2 = v1()

const CHANGE_FILTER_VALUE = "CHANGE-FILTER-VALUE" as const

export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

export type FilterValueType = "all" | "active" | "completed"

type ChangeFilterValueType = {
    type: "CHANGE-FILTER-VALUE"
    todolistId: string
    filterValue: FilterValueType
}

type ActionsType = ChangeFilterValueType


export const changeFilterValueAC = (todolistId: string,
                                  filterValue: FilterValueType): ChangeFilterValueType => ({
    type: CHANGE_FILTER_VALUE,
    todolistId,
    filterValue,
})

const initTodolistsState: TodolistType[] = [
    {id: TODOLIST_ID1, title: "First todolist", filter: "all",},
    {id: TODOLIST_ID2, title: "Second todolist", filter: "all",}
]
export const todolistReducer = (state = initTodolistsState, action: ActionsType) => {
    // @ts-ignore
    switch (action.type) {
        case CHANGE_FILTER_VALUE:
            return state.map(
                el => el.id === action.todolistId ? {...el, filter: action.filterValue} : el)
        default:
            return state
    }
}