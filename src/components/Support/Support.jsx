import React from 'react';
import s from './Support.module.scss';
import { FaVk, FaHandHoldingUsd } from 'react-icons/fa';
import { SiBoosty } from 'react-icons/si';


const Support = () => {
  return (
    <section className={s.Support}>
      <div className={s.container}>
        <h2 className={s.title}>Поддержка</h2>

        <div className={s.columns}>
          <div className={s.column}>
            <h3 className={s.subtitle}>Предложения и идеи</h3>
            <p className={s.text}>Вы можете написать нам на почту или в личные сообщения Вконтакте</p>

            <div className={s.contactBlock}>
              <p className={s.contactLabel}><strong>Вконтакте:</strong></p>
              <a href="https://vk.com/cyspnet" className={s.contactLink}>vk.com/cyspnet</a>
            </div>

            <div className={s.contactBlock}>
              <p className={s.contactLabel}><strong>Email:</strong></p>
              <a href="mailto:ceo@cyspnet.com" className={s.contactLink}>ceo@cyspnet.com</a>
            </div>
          </div>

          <div className={s.column}>
            <h3 className={s.subtitle}>Краудфандинг</h3>
            <div className={s.icons}>
              <a href="#" className={s.icon}><SiBoosty/></a>
              <a href="#" className={s.icon}><FaHandHoldingUsd /></a>

              <a href="https://vk.com/cyspnet" className={s.icon}><FaVk /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
