import style from "./HeaderNavlinkButtons.module.css";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

export const HeaderNavlinkButtons = React.memo(() => {

        const [activePage, setActivePage] = useState<string>("add")

        return (
            <div className={style.page_controls}>
                <NavLink to="/add">
                    <button
                        onClick={() => setActivePage("add")}
                        className={activePage === "add" ? style.btn_active : ""}>
                        Add todolist
                    </button>
                </NavLink>
                <NavLink to="/todolists">
                    <button onClick={() => setActivePage("todolists")}
                            className={activePage === "todolists" ? style.btn_active : ""}>
                        Todolists page
                    </button>
                </NavLink>
            </div>
        )
    }
)