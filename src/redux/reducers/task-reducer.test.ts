import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    deleteTaskAC,
    taskReducer,
    TasksType
} from "./task-reducer";
import {addTodolistAC, deleteTodolistAC} from "./todolist-reducer";

const TODOLIST_ID1 = "1"
const TODOLIST_ID2 = "2"
const initTasksState: TasksType = {
    [TODOLIST_ID1]: [
        {todolistId: TODOLIST_ID1, taskId: "11", title: "Bread", status: false},
        {todolistId: TODOLIST_ID1, taskId: "12", title: "Milk", status: false},
        {todolistId: TODOLIST_ID1, taskId: "13", title: "Nuts", status: false},
    ],
    [TODOLIST_ID2]:
        [
            {todolistId: TODOLIST_ID2, taskId: "21", title: "Do homework", status: false},
            {todolistId: TODOLIST_ID2, taskId: "22", title: "Walk the dog", status: false},
            {todolistId: TODOLIST_ID2, taskId: "23", title: "Buy dollars", status: false},
        ],
}

test("task in correct todolist should to change status", () => {
    const endTasksState = taskReducer(initTasksState, changeTaskStatusAC(TODOLIST_ID1, "12"))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).not.toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).toBe(initTasksState[TODOLIST_ID2])
    expect(endTasksState[TODOLIST_ID1][1]).not.toBe(initTasksState[TODOLIST_ID1][1])
    expect(endTasksState[TODOLIST_ID1][1].status).toBe(true)
})
test("task in correct todolist should be deleted", () => {
    const endTasksState = taskReducer(initTasksState, deleteTaskAC(TODOLIST_ID1, "12"))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).not.toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).toBe(initTasksState[TODOLIST_ID2])
    expect(endTasksState[TODOLIST_ID1][1]).not.toBe(initTasksState[TODOLIST_ID1][1])
    expect(endTasksState[TODOLIST_ID1].length).toBe(2)
})
test("task in correct todolist should be added", () => {
    const endTasksState = taskReducer(initTasksState, addTaskAC(TODOLIST_ID1, "Added task"))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).not.toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).toBe(initTasksState[TODOLIST_ID2])
    expect(endTasksState[TODOLIST_ID1][0]).not.toBe(initTasksState[TODOLIST_ID1][0])
    expect(endTasksState[TODOLIST_ID1][1]).toBe(initTasksState[TODOLIST_ID1][0])
    expect(endTasksState[TODOLIST_ID1][0].title).toBe("Added task")
    expect(endTasksState[TODOLIST_ID1].length).toBe(4)
})
test("task in correct todolist should changed title", () => {
    const endTasksState = taskReducer(initTasksState, changeTaskTitleAC(TODOLIST_ID1, "13"
        , "Changed title"))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).not.toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).toBe(initTasksState[TODOLIST_ID2])
    expect(endTasksState[TODOLIST_ID1][2]).not.toBe(initTasksState[TODOLIST_ID1][2])
    expect(endTasksState[TODOLIST_ID1][1]).toBe(initTasksState[TODOLIST_ID1][1])
    expect(endTasksState[TODOLIST_ID1][2].title).toBe("Changed title")
    expect(endTasksState[TODOLIST_ID1].length).toBe(3)
})
test("correct property in object and tasks should be removed", () => {
    const endTasksState = taskReducer(initTasksState, deleteTodolistAC(TODOLIST_ID2))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).not.toBeDefined()
})
test("correct property in object and tasks should be added", () => {
    const endTasksState = taskReducer(initTasksState, addTodolistAC("3", "Added todolist"))

    expect(endTasksState).not.toBe(initTasksState)
    expect(endTasksState[TODOLIST_ID1]).toBe(initTasksState[TODOLIST_ID1])
    expect(endTasksState[TODOLIST_ID2]).toBe(initTasksState[TODOLIST_ID2])
    expect(endTasksState["3"]).toEqual([])
})