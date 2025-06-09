import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames'; // для удобной смены классов

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <Link to="/" className={s.logoLink}>
              <img src="/logo.png" alt="Logo" className={s.logoImg} />
            </Link>
            <Link to="/" className={s.link}>CYSPNET</Link>
          </div>

          {/* Кнопка бургер */}
          <button className={s.burger} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Навигация */}
          <nav className={classNames(s.nav, { [s.open]: isOpen })}>
            <a href="/" className={s.link} onClick={() => setIsOpen(false)}>Главная</a>
            <a href="#about" className={s.link} onClick={() => setIsOpen(false)}>О проекте</a>
            <a href="#possibilities" className={s.link} onClick={() => setIsOpen(false)}>Возможности</a>
            <a href="#cards" className={s.link} onClick={() => setIsOpen(false)}>Карточки</a>
            <a href="#statistics" className={s.link} onClick={() => setIsOpen(false)}>Статистика</a>
            <a href="#FAQ" className={s.link} onClick={() => setIsOpen(false)}>FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
