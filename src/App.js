import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let torso = [
    "Падахастасана",
    "Пачшимотанасана",
    "Халасана",
    "Йога мудра"
  ];
  let legs = [
    "Упражнения на растяжение ног в сторону и зону свадхисханы",
    "Парватасана - поза кошки",
    "Супта Вирасана - согнутые колени, лежать на спине",
    "Випарита карани"
  ];
  let abs = [
    "Навасана",
    "Боковой прес (сидя на ягодице)",
    "Велосипедик",
    "Поднятие прямых ног"
  ];
  let arms = [
    "Планка",
    "Отжимания",
    "Бакасана",
    "Ширшасана"
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Сегодняшний набор спец-упражнений</span>
        <div>
          <span class="Main-text">Асана для растяжения поясницы </span>
          <span class="Inline-text">{torso[Math.floor(Math.random()*torso.length)]}</span>
        </div>
        <div>
        <span class="Main-text">Асана для укрепления рук </span>
        <span class="Inline-text">{arms[Math.floor(Math.random()*arms.length)]}</span>
        </div>
        <div>
        <span class="Main-text">Асана для укрепления пресса </span>
        <span class="Inline-text">{abs[Math.floor(Math.random()*abs.length)]}</span>
        </div>
        <div>
        <span class="Main-text">Асана для растяжения ног </span>
        <span class="Inline-text">{legs[Math.floor(Math.random()*legs.length)]}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
