import React, {ChangeEvent, useState} from "react";
import styles from "./EditableSpan.module.css"

type PropsType = {
    title: string
    setNewItemHandler: (itemTitle: string) => void
}

export const EditableSpan: React.FC<PropsType> = ({title, setNewItemHandler}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [itemTitle, setItemTitle] = useState<string>(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(event.currentTarget.value)
    }

    const onBlurInputHandler = () => {
        setEditMode(false)
        setNewItemHandler(itemTitle)
    }

    return (
        <>
            {editMode ? <input className={styles.input_todolist} type="text" value={itemTitle} onChange={onChangeInputHandler}
                               onBlur={onBlurInputHandler} autoFocus={true}/> :
                <span className={styles.todolist_title} onDoubleClick={() => setEditMode(true)}>{itemTitle}</span>}
        </>
    )
}