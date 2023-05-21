import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [intervalId, setintervalId] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    clearTimeout(intervalId);
    var interval = setTimeout(() => {
      setAlert(null);
    }, 1500);
    setintervalId(interval);
  }


  const toggleMode = () => {
    let colorPalettes = document.getElementsByClassName('color-palette');
    let buttons = document.getElementsByClassName('ChangeColors');
    let AboutButtons = document.getElementsByClassName('accordion-button');
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      Array.from(colorPalettes).forEach(colorPalettes => colorPalettes.style.display = 'block');
      Array.from(AboutButtons).forEach((button) => {
        button.style.backgroundColor = "#449ee6";
      });
      showAlert('Dark mode has been enable', 'success');
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      Array.from(colorPalettes).forEach(colorPalettes => colorPalettes.style.display = 'none');
      Array.from(buttons).forEach((button) => {
        button.style.backgroundColor = '#0d6efd';
        button.style.borderColor = '#0d6efd';
      });
      Array.from(AboutButtons).forEach((button) => {
        button.style.backgroundColor = "white";
      });
      showAlert('Light mode has been enable', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  }

  const changeDarkModeColor = (bodybackgroundColor, buttonsbodybackgroundColor,AboutButtonsBackgroundColor) => {
    document.body.style.backgroundColor = bodybackgroundColor;
    let buttons = document.getElementsByClassName('ChangeColors');
    let AboutButtons = document.getElementsByClassName('accordion-button');
    Array.from(buttons).forEach((button) => {
      button.style.backgroundColor = buttonsbodybackgroundColor;
      button.style.borderColor = buttonsbodybackgroundColor;
    });
    Array.from(AboutButtons).forEach((button) => {
      button.style.backgroundColor = AboutButtonsBackgroundColor;
    });
  }

  return (
    <>
        <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} changeDarkModeColor={changeDarkModeColor} />
        <Alert alert={alert} />
        <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, 
              Remove extra spaces" mode={mode} />
              {/* <About mode={mode}/> */}
        </div>
    </>
  );
}

export default App;

