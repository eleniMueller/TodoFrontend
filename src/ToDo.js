import {useEffect, useState} from "react";
import {getTodos} from "./fetch";

export function ToDo() {
    const [toDo, setToDo] = useState([]);

    useEffect(()=>{
        getTodos((td)=> setToDo(td))
    }, [])

    return (
        <div className="App">
            <div><b><h2>Gesamt: {toDo.length}</h2></b></div>

            <center>
                <table>
                    <thead>
                    <tr>
                        <th className= "thUserId">User ID</th>
                        <th className= "thId">ID</th>
                        <th className= "thTitle">Titel</th>
                        <th className= "thComplete">Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {toDo.map((toDo) => <tr>
                        <td className= "tdUserId">{toDo.userId}</td>
                        <td className= "tdId">{toDo.id}</td>
                        <td className= "tdTitle">{toDo.title}</td>
                        <td className= "tdComplete" style={{backgroundColor: toDo.completed === true ? "green":"red"}}>{toDo.completed}</td>
                    </tr>)}
                    </tbody>
                </table>
            </center>
        </div>
    )
}