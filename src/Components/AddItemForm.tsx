import React, {ChangeEvent, useState} from "react";

type PropsType = {
    addItemHandler: (inputValue: string) => void
}

export const AddItemForm: React.FC<PropsType> = ({addItemHandler}) => {
    const [inputValue, setInputValue] = useState<string>("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        debugger
        addItemHandler(inputValue)
        setInputValue("")
    }

    return (
        <div>
            <input type="text" placeholder={"New task/toodolist"} value={inputValue}
                   onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    )
}