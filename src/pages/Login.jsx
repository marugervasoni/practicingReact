import React, { useState } from 'react'
import styles from '../styles/Login.module.css'

const Login = () => {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onSubmitForm = (e) => {
        e.preventDefault();
        
        //validations
        const isUserNameValid = validateUserName(userName);
        const isPasswrodValid = validatePassword(password);
        if (!isUserNameValid || !isPasswrodValid) {
            alert("Alguno de los datos ingresados no es correcto");
        }   else {
            alert(`Welcome: ${userName}`);
        }
    }

  return (
    <>
        <div className={styles.loginForm}>
            <h2>Login</h2>
            <form onSubmit={onSubmitForm}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={onChangeUserName} 
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword} 
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    </>
  )
}

const validateUserName = (userName) => {
    const withoutSpaces = userName.trim();
    if(withoutSpaces.length > 2) {
        return true; 
    }   else {
        return false;
    }
}

const validatePassword = (password) => {
    const withoutSpaces = password.trim();
    const passwordAsArray = withoutSpaces.split("");
    const hasNumber = passwordAsArray.some((character) => {
        if(isNaN(character)) {
            return false; 
        }   else {
            return true;
        }
    });
    if (withoutSpaces.length > 5 && hasNumber) {
        return true;
    }   else {
        return false;
    }
}

export default Login