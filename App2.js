import React, { useState } from 'react';
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App2.css';

function App2() {
  
  const [ toDoList, setToDoList ] = useState(data);

/********************************************************
* nazwa funkcji: PrzelaczenieUkonczenia
*
* parametry wejściowe: id
* wartość zwracana: zmiana ukonczenia do odpowiedniego zadania
* opis funkcji: Funkcja dzięki kliknięciu na dane zadanie, możemy znaleźć jego id i zmienić jego ukonczenie, żeby zaznaczyć czy zadanie zostało ukończone czy nie
*
* ****************************************************/

  const PrzelaczenieUkonczenia = (id) => {
    let mapped = toDoList.map(zadanie => {
      return zadanie.id === Number(id) ? { ...zadanie, ukonczenie: !zadanie.ukonczenie } : { ...zadanie};
    });
    setToDoList(mapped);
  }

/********************************************************
* nazwa funkcji: UsunZadanie
*
* wartość zwracana: nieukończone zadania
* opis funkcji: Funkcja filtruje nam toDoList i zwraca zadania, które nie zostały ukończone, a następnie ustawia filtrowaną tablicę na toDoList.
*
* ****************************************************/

  const UsunZadanie = () => {
    let filtered = toDoList.filter(zadanie => {
      return !zadanie.ukonczenie;
    });
    setToDoList(filtered);
  }

/********************************************************
* nazwa funkcji: DodajZadanie
*
* parametry wejściowe: userInput
* opis funkcji: Ta funkcja pobiera userInput, który pobraliśmy ze stanu komponentu formularza. Robi kopię toDoList, żeby bezpośrednio niemanipulować stanem. Następnie przypisuje kopię do nowej tablicy z dodanym nowym elementem listy.
*
* ****************************************************/

  const DodajZadanie = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, zadanie: userInput, ukonczenie: false }];
    setToDoList(copy);
  }

  return (
    

       
       <div className="App2">
         <Header />
          <ToDoList id="jeden" toDoList={toDoList} PrzelaczenieUkonczenia={PrzelaczenieUkonczenia} UsunZadanie={UsunZadanie}/> 
          
          <div className ="App3">
            <hr id="d"></hr>
          <button id="przycisk1" onClick={UsunZadanie}>Usuń wykonane zadanie</button>
           <ToDoForm id="dwa" addTask={DodajZadanie}/> 
          </div>
          
        </div>  
  );
}

export default App2;
