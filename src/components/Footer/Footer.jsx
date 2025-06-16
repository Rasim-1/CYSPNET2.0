import React from 'react'
import s from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.box}>
            <div className={s.logo}>
              <img src="./logos.png" alt="" />
            </div>

            <div className={s.nav}>
              <h4>Навигация</h4>
              <a href="/">Главная</a>
              <a href="#about">О проекте</a>
              <a href="#possibilities">Возможности</a>
              <a href="#cards">Карточки</a>
              <a href="#statistics">Статистика</a>
              <a href="#FAQ">FAQ</a>
            </div>

            <div className={s.nav}>
              <h4>Разное</h4>
              <Link to="/helppage">Поддержать проект</Link>
              <Link to="/gratitude">Благодарности</Link>
              <Link to="/contactpage">Контакты</Link>
            </div>

            <div className={s.nav}>
              <h4>Соц. сети</h4>
              <img src="./foo1.png" alt="" />
              <img src="./foo2.png" alt="" />
              <img src="./foo3.png" alt="" />
              <img src="./foo4.png" alt="" />
              <img src="./foo5.png" alt="" />
            </div>

            <div className={s.chicken}>
              <img src="./kur.png" alt="курочка" />
            </div>
          </div>


            <div className={s.wrapp}>       
                <p>© 2021 CYSPNET. Все права защищены.</p>
                <Link to={"/support"}>Правила пользования</Link>
                <Link to={"/сonfidentiality"}>Политика конфиденциальности</Link>

                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
