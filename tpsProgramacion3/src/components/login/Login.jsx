import {useState} from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  
  var colorP = false;

  const handleChange = (event) => {
    const value = event.target.value;

    setUserName(value);

    if (value.includes('O') || value.includes('o')) {

      alert("Error, Debe Ingresar un Nombre SIN la Letra o");
      setMsj("Ingrese un nombre sin la letra o");
      
    } else {
      setMsj('')
      colorP = true
    }
  }

  const buttonRegister = () => {
    if (!userName || userName.includes('o') || userName.includes('O')) {

      alert("Usuario inválido");

    } else {
      
      alert("Usuario registrado correctamente");
    }
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Ingrese su Nombre de Usuario..." 
        style={{ width: '300px', height: '40px', fontSize: '16px' }} 
        onChange = {handleChange}

      />
      <button onClick={buttonRegister}>Registrarse</button>
      <p>Usuario: {userName}</p>
      
    </>
  )
}

export default Login
