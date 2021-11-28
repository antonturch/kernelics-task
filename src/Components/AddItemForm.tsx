import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "./AddItemForm.module.css"

type AddItemFormPropsType = {
    addItemHandler: (inputValue: string) => void
    type: string
}

export const AddItemForm: React.FC<AddItemFormPropsType> = React.memo(({addItemHandler, type}) => {

    const [inputValue, setInputValue] = useState<string>("")
    const [error, setError] = useState<string>("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError("")
        const newInputValue = event.currentTarget.value
        setInputValue(newInputValue)
    }

    const onClickButtonHandler = () => {
        if (inputValue.trim() !== "") {
            addItemHandler(inputValue)
            setInputValue("")
        } else {
            setError(`Please enter ${type} title`)
        }
    }
    const onPressEnterHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.charCode === 13 && inputValue.trim() !== "") {
            addItemHandler(inputValue)
            setInputValue("")
        } else
            setError(`Please enter ${type} title`)
    }

    return (
        <div className={style.add_task_form}>
            <div className={style.task_input}>
                <input className={style.input}
                       type={"text"}
                       placeholder={`New ${type}`}
                       value={inputValue}
                       onChange={onChangeInputHandler}
                       onKeyPress={onPressEnterHandler}
                       autoFocus/>
                <div className={style.error_message}>{error}</div>
            </div>
            <button className={style.task_add_button} onClick={onClickButtonHandler}>
                <svg viewBox="0 0 40 40">
                    <path d="M10 20 L30 20 M20 10 L20 30"/>
                </svg>
            </button>
        </div>
    )
})