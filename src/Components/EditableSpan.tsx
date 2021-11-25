import React, {ChangeEvent, useState} from "react";

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
            {editMode ? <input type="text" value={itemTitle} onChange={onChangeInputHandler}
                               onBlur={onBlurInputHandler} autoFocus={true}/> :
                <span onDoubleClick={() => setEditMode(true)}>{itemTitle}</span>}
        </>
    )
}