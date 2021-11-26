import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./reducers/todolist-reducer";
import {taskReducer} from "./reducers/task-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: taskReducer,
})

export const store = createStore(rootReducer)