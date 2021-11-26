import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {IconButton, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItemHandler: (inputValue: string) => void
    inputLabel: string
}

export const AddItemForm: React.FC<AddItemFormPropsType> = ({addItemHandler, inputLabel}) => {

    const [inputValue, setInputValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        const newInputValue = event.currentTarget.value
        setInputValue(newInputValue)
    }

    const onClickButtonHandler = () => {
        if (inputValue.trim() !== "") {
            addItemHandler(inputValue)
            setInputValue("")
        } else {
            setError(true)
        }
    }
    const onPressEnterHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.charCode === 13 && inputValue.trim() !== "") {
            addItemHandler(inputValue)
            setInputValue("")
        } else
            setError(true)
    }

    return (
        <div>
            <TextField size={"small"}
                       id="outlined-basic"
                       label={inputLabel}
                       variant="outlined"
                       value={inputValue}
                       onChange={onChangeInputHandler}
                       error={error}
                       helperText={error ? "title is required" : ""}
                       className={error ? "error" : ""}
                       onKeyPress={onPressEnterHandler}
                       autoFocus
            />
            <IconButton aria-label="Add task" size="medium">
                <AddTaskIcon fontSize="medium"
                             onClick={onClickButtonHandler}
                             color="success"/>
            </IconButton>
        </div>
    )
}