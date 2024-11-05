import React from 'react';


export default function Page() {
  return (
    // <div className="container_2">
    //   <form className="form">
    //     <h2 className="heading">Регистрация</h2>
    //     <input type="text" placeholder="Имя" className="input" />
    //     <input type="email" placeholder="Электронная почта" className="input" />
    //     <input type="password" placeholder="Пароль" className="input" />
    //     <button type="submit" className="button">Зарегистрироваться</button>
    //   </form>
    // </div>
<div className="cnt">
    <div className="wrapper">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">

          <input type="text" placeholder='Username'/>
        </div>
        <div className="input-box">
  
          <input type="password" placeholder='Password'/>
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
      <button type='submit'>Login</button>
      <div className="register-link">
        <p>Dont have an sccoint?<a href="#">Register</a></p>
      </div>
      </form>
    </div>
    </div>
  );
}
