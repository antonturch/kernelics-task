import {
    addTodolistAC,
    changeFilterValueAC,
    changeTodolistTitleAC,
    deleteTodolistAC,
    todolistReducer,
    TodolistType
} from "./todolist-reducer";

const TODOLIST_ID1 = "1"
const TODOLIST_ID2 = "2"

const startTodolistsState: TodolistType[] = [
    {id: TODOLIST_ID1, title: "First todolist", filter: "all",},
    {id: TODOLIST_ID2, title: "Second todolist", filter: "all",},
]

test("filter value should change in correct todolist", () => {
    const endTodolistState = todolistReducer(startTodolistsState, changeFilterValueAC("2"
        , "active"))

    expect(endTodolistState).not.toBe(startTodolistsState)
    expect(endTodolistState[0]).toBe(startTodolistsState[0])
    expect(endTodolistState[1]).not.toBe(startTodolistsState[1])
    expect(endTodolistState[1].filter).toBe("active")
})
test("correct todolist should be removed", () => {
    const endTodolistState = todolistReducer(startTodolistsState, deleteTodolistAC("1"))

    expect(endTodolistState).not.toBe(startTodolistsState)
    expect(endTodolistState[0]).toBe(startTodolistsState[1])
    expect(endTodolistState[1]).not.toBeDefined()
})
test("todolist should be added", () => {
    const endTodolistState = todolistReducer(startTodolistsState, addTodolistAC("3"
        , "Added todolist"))

    expect(endTodolistState).not.toBe(startTodolistsState)
    expect(endTodolistState[0]).not.toBe(startTodolistsState[0])
    expect(endTodolistState[1]).toBe(startTodolistsState[0])
    expect(endTodolistState[0].title).toBe("Added todolist")
})
test("correct todolist should change a title", () => {
    const endTodolistState = todolistReducer(startTodolistsState, changeTodolistTitleAC("1"
        , "Changed todolist"))

    expect(endTodolistState).not.toBe(startTodolistsState)
    expect(endTodolistState[0]).not.toBe(startTodolistsState[0])
    expect(endTodolistState[1]).toBe(startTodolistsState[1])
    expect(endTodolistState[0].title).toBe("Changed todolist")
})