import {AddItemForm} from "./AddItemForm";
import {useDispatch} from "react-redux";
import {addTodolistAC} from "../redux/reducers/todolist-reducer";
import React, {useCallback} from "react";
import {v1} from "uuid";
import style from "./AddTodolistPage.module.css"

export const AddTodolistPage = React.memo(() => {

        const dispatch = useDispatch()
        const addTodolist = useCallback((todolistTitle: string) => {
            dispatch(addTodolistAC(v1(), todolistTitle))
        }, [dispatch])

        return (
            <div className={style.add_todolist_block}>
                <div>
                    <AddItemForm addItemHandler={addTodolist} type={"todolist"}/>
                </div>
            </div>
        )
    }
)