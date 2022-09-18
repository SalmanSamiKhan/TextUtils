import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); // if darkmode is enabled
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enabled','success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled','success')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter Text" mode={mode} />
      </div>
      {/* <About/>  */}
    </>
  );
}

export default App;
