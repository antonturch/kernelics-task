import React, {ChangeEvent, useState} from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {TextField} from "@material-ui/core";
import {IconButton} from "@mui/material";

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
            {/*<Input type="text" placeholder={"New task/toodolist"} value={inputValue}*/}
            {/*       onChange={onChangeInputHandler}/>*/}
            {/*<button onClick={onClickButtonHandler}>Add</button>*/}
            <TextField size={"small"} id="outlined-basic" label="New task" variant="outlined"
                       value={inputValue} onChange={onChangeInputHandler}
            />
            <IconButton aria-label="Add task" size="medium">
            <AddTaskIcon fontSize="medium" onClick={onClickButtonHandler} color="success"/>
                </IconButton>
            {/*<Button size={"large"} variant={"contained"} onClick={onClickButtonHandler}>+1</Button>*/}
        </div>
    )
}