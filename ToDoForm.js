import React, { useState } from 'react';
import './ToDoForm.css';
const ToDoForm = ({ addTask }) => {

/********************************************************
* nazwa funkcji: useState
*
* opis funkcji: UseStaet będzie śledził wszystkie dane wejściowe, które wprowadzimy do formularza. Jego stan początkowy jest ustawiony na pusty ciąg, bo w formularzu nie ma jeszcze nic.
*
* ****************************************************/

    const [ userInput, setUserInput ] = useState('');

/********************************************************
* nazwa funkcji: ZmianaStanu
*
* opis funkcji: Za każdym razem, kiedy wpiszemy w inpucie nowe zadanie, stan się zmieni i pokaże nam najnowsze dane
*
* ****************************************************/

    const ZmianaStanu= (e) => {
        setUserInput(e.currentTarget.value)
    }

/********************************************************
* nazwa funkcji: Dodaj
*
* opis funkcji: Gdy klikniemy przycisk "Dodaj", to funkcja doda zadanie do listy
*
* ****************************************************/

    const Dodaj = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        
        <form onSubmit={Dodaj}>
            <input id="pole1" value={userInput} type="text" onChange={ZmianaStanu} placeholder="Dodaj zadanie..."/>
            <button id="przycisk2">Dodaj</button>
        </form>
    );
};

export default ToDoForm;