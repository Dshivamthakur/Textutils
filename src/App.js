import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [intervalId, setintervalId] = useState(null);
  const [bodybackgroundColor, setbodybackgroundColor] = useState(null);
  const [buttonsColor, setbuttonsColor] = useState(null);
  const [AboutUsButtonsColor, setAboutUsButtonsColor] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    clearTimeout(intervalId);
    const interval = setTimeout(() => {
      setAlert(null);
    }, 1500);
    setintervalId(interval);
  }

  document.body.style.backgroundColor = bodybackgroundColor;
  const toggleMode = () => {
    console.log(bodybackgroundColor);
      if (mode === 'light') {
      setMode('dark');
      setbodybackgroundColor('#042743');
      setbuttonsColor('rgb(13 110 253)');
      setAboutUsButtonsColor('#449ee6');
      showAlert('Dark mode has been enable', 'success');
    }
    else {
      setMode('light');
      setbodybackgroundColor('white');
      setbuttonsColor('#0d6efd');
      setAboutUsButtonsColor('white');
      showAlert('Light mode has been enable', 'success');
    }
  }

  const changeDarkModeColor = (bodybackgroundColor, buttonsColor, AboutButtonsBackgroundColor) => {
      setbodybackgroundColor(bodybackgroundColor);
      setbuttonsColor(buttonsColor);
      setAboutUsButtonsColor(AboutButtonsBackgroundColor);
      }

  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} changeDarkModeColor={changeDarkModeColor}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} AboutUsButtonsColor = {AboutUsButtonsColor} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} buttonsColor = {buttonsColor} heading="Try TextUtils - Word Counter, Character Counter, 
              Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
      </>
      );
}

      export default App;

