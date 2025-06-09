import React from 'react';
import s from './Hero.module.scss';
import Header from '../Header/Header';

const Hero = () => {
    const scrollToNextSection = () => {
        const allSections = document.querySelectorAll('[data-section]');
        for (let i = 0; i < allSections.length; i++) {
          const rect = allSections[i].getBoundingClientRect();
          if (rect.top > window.innerHeight * 0.3) {
            allSections[i].scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      };
      

  return (
    <>
      <section className={s.hero}>
        <div className="container">
          {/* <Header /> */}
          <div className={s.wrapper}>
            <div className={s.content}>
              <p>Cyber Sport Network</p>
              <h1 className={s.title}>
                Играй, развивайся и выигрывай вместе с нами
              </h1>
              <div className={s.info}>
                <ul>
                  <li>Ежедневные турниры</li>
                  <li>Денежные призы</li>
                  <li>Свой подход к читерству</li>
                </ul>

                <ul>
                  <li>Уникальная рейтинговая система</li>
                  <li>Развитие в любой отрасли киберспорта</li>
                  <li>Интересный матчмейкинг</li>
                </ul>
              </div>
              <div className={s.buttons}>
                <a href='https://t.me/+hoDJO8Q6yCIxZmQy' className={s.button}>Присоединиться</a>
                
                <a className={s.button} href="#about">О проекте</a>
              </div>
            </div>

            <div className={s.image}>
              <img src="/hero.png" alt="Hero" className={s.heroImg} />
            </div>
          </div>
          {/* <div className={s.scrollDown} onClick={scrollToNextSection}>
            <p>Скролль чтобы увидеть больше</p>
            <img src="/arrow.png" alt="down" />
          </div> */}

         
        </div>
      </section>
    </>
  );
};

export default Hero;
