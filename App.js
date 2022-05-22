import React, {useState} from "react";
import Axios from 'axios';
import './App.css';
import App2 from './App2.js'

function App() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus1, setLoginStatus1] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const [loginStatus2, setLoginStatus2] = useState();

/********************************************************
* nazwa funkcji: rejestracja
*
* opis funkcji: Dzięki tej funkcji możemy zarejestrować do bazy danych nowego użytkownika
*
* ****************************************************/

  const rejestracja = () => {
    Axios.post("http://localhost:3001/register", 
    {username: usernameReg,
    password: passwordReg
  }).then((response) => {
    console.log(response);
  });
  };


/********************************************************
* nazwa funkcji: login
*
* opis funkcji: Dzięki tej funkcji możemy zalogować się do aplikacji. Jeśli nazwa i hasło będą poprawne pokaże nam się aplikacja, jeśli nie to wyświetli nam się wiadomość o błędzie.
*
* ****************************************************/
  const login = () => {
    Axios.post("http://localhost:3001/login", 
    {username: username,
    password: password
  }).then((response) => {

    if(response.data.message) {
      setLoginStatus();
      setLoginStatus1(response.data.message);
      setLoginStatus2();
    } else{
      setLoginStatus1();
      setLoginStatus(<App2 />);
      setLoginStatus2(<button class="przyciski" onClick={() => window.location.reload(false)}>Wyloguj się</button>);
    }

    console.log(response.data);
  });
  };

  return (
   <div className="App">

     <div id="lewy">
  
       <h1>Rejestracja:</h1>
       <h2>Nazwa:</h2>
       <input class="pola" type="text" placeholder="Podaj nazwe..." onChange={(e) => {setUsernameReg(e.target.value)}}/>
       <h2>Hasło:</h2>
       <input class="pola" type="password" placeholder="Podaj hasło..." onChange={(e) => {setPasswordReg(e.target.value)}}/>
       <br></br><br></br>
       <button class="przyciski" onClick={rejestracja}>Zarejestruj się</button>

<br></br><br></br><br></br>

       <h1>Zaloguj się:</h1>
       <h2>Nazwa:</h2>
       <input class="pola" type="text" placeholder="Nazwa..." onChange={(e) => {setUsername(e.target.value)}}/>
       <h2>Hasło:</h2>
       <input class="pola" type="password" placeholder="Hasło.." onChange={(e) => {setPassword(e.target.value)}}/>
       <br></br><br></br>
       <button class="przyciski" onClick={login}>Zaloguj się</button>
       
        <div id="wiadomosc">
        <h1>{loginStatus1}</h1>
        </div>
        
        <div>
          {loginStatus2}
        </div>

</div>

<div id="zawartosc">
   {loginStatus}
</div>
    
   </div>
  );
}

export default App;
