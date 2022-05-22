import React from 'react';
import './ToDo.css';

/********************************************************
* nazwa funkcji: ToDo
*
* parametry wejściowe: todo, PrzelaczenieUkonczenia
* wartość zwracana: stylizacja elementów listy zadań
* opis funkcji: Jeśli zadanie zostanie wykonane to zmieni swoją stylizację.
*
* ****************************************************/

const ToDo = ({todo, PrzelaczenieUkonczenia}) => {


/********************************************************
* nazwa funkcji: Klik
*
* opis funkcji: Funkcja powoduje, że poprzez kliknięcie na element listy zmieni on swoją stylizację.
*
* ****************************************************/

    const Klik = (e) => {
        e.preventDefault()
        PrzelaczenieUkonczenia(e.currentTarget.id)
    }

    return (

        <div id={todo.id} key={todo.id + todo.zadanie} name="todo" value={todo.id} onClick={Klik} className={todo.ukonczenie ? "todo strike" : "todo"}>
            <ul id="lista">
                <li id="dsf">{todo.zadanie}</li>
            </ul>
            
        </div>
    );
};

export default ToDo;