import React from 'react';
import ToDo from './ToDo';

/********************************************************
* nazwa funkcji: ToDoList
*
* parametry wejściowe: toDoList, PrzelaczenieUkonczenia, UsunZadanie
*
* opis funkcji: Funkcja tworzy indywidualne zadania do wykonania.
* ****************************************************/

const ToDoList = ({toDoList, PrzelaczenieUkonczenia, UsunZadanie}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} PrzelaczenieUkonczenia={PrzelaczenieUkonczenia} UsunZadanie={UsunZadanie}/>
                )
            })}
        </div>
    );
};

export default ToDoList;