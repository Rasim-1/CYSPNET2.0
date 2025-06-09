import React from 'react'
import s from './About.module.scss'
import { Link } from 'react-router-dom'

const About = () => {
  return (
 <>
 <section id="about" className={s.about}>
 <div className="container">
          <div className={s.wrapper}>
            <div className={s.about__img}>
              <a href="https://youtu.be/F0GB4qXl-Cc?si=IhTQKbdRvKaqYvpB">
              <img src="./about1.png" alt="" />
              </a>

            </div>

            <div className={s.about__container}>
              <h2>
              О платформе
              </h2>
              <p>Новый формат киберспортивной платформы. Игроки и тренеры, комментаторы и аналитики, команды и клубы, арены и организаторы — здесь каждый может раскрыть свой потенциал, зарабатывать в любимой игре и просто весело проводить время с друзьями.</p>
              <a href='https://t.me/+hoDJO8Q6yCIxZmQy' className={s.about__link}> Вступить </a>
            
            </div>
          </div>
        </div>
 </section>
 
 
 </>
  )
}

export default About