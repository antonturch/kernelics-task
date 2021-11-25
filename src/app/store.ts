import {combineReducers, createStore} from "redux";
import {todolistReducer} from "../features/Todolists/todolist-reducer";
import {taskReducer} from "../features/Tasks/task-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: taskReducer,
})

export const store = createStore(rootReducer)