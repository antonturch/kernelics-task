import React from "react";
import {TodolistsList} from "../features/Todolists/TodolistsList";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {AddTodolistPage} from "../Components/AddTodolistPage";
import {Button, ButtonGroup, Grid, Tab, Tabs} from "@mui/material";
import style from "../features/Todolists/Todolist.module.css";

function App() {
    const [value, setValue] = React.useState('addTodolist');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <BrowserRouter>
            <Grid container spacing={3} style={{justifyContent: "center"}}>
                <Grid item>
                    <ButtonGroup className={style.buttonGroup} color="inherit" sx={{color: "#607d8b"}}
                                 aria-label="small button group">
                        <NavLink to="/add"><Button>Add new todolist</Button></NavLink>
                        <NavLink to="/todolists"><Button>Todolist page</Button></NavLink>
                    </ButtonGroup>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="addTodolist" label="Item One" />
                        <Tab value="seeTodolists" label="Item Three" />
                    </Tabs>
                </Grid>
            </Grid>
            <Routes>
                <Route path="/add" element={<AddTodolistPage/>}/>
                <Route path="/todolists" element={<TodolistsList/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
