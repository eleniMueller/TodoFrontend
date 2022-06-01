import './App.css';
import {useEffect, useState} from "react";
import {getTodos} from "./fetch";
import {ToDo} from "./ToDo";

export function App() {

    return(
        <div>
            <ToDo />
        </div>
    )
}

export default App;