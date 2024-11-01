import React from 'react';


export default function Page() {
  return (
    <div className="container_2">
      <form className="form">
        <h2 className="heading">Регистрация</h2>
        <input type="text" placeholder="Имя" className="input" />
        <input type="email" placeholder="Электронная почта" className="input" />
        <input type="password" placeholder="Пароль" className="input" />
        <button type="submit" className="button">Зарегистрироваться</button>
      </form>
    </div>
  );
}
