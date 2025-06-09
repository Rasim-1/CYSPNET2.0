import React from "react";
import s from "./Help.module.scss";

const Help = () => {
  return (
    <>
      <div className={s.help}>
        <div className="container">
          <div className={s.wrapper}>
            <h2 className={s.title}>Поддержка</h2>
            <div className={s.wrapp}>
              <div className={s.box}>
                <h3>Предложения и идеи</h3>
                <p>
                  Вы можете написать нам на почту или в личные сообщения
                  Вконтакте
                </p>
                <div>
                  <h4>Вконтакте:</h4>
                  <a href="">vk.com/cyspnet</a>
                </div>
                <div>
                  <h4>Email:</h4>
                  <a href="">ceo@cyspnet.com</a>
                </div>
              </div>
              <div className={s.info}>
                <h3>Краудфандинг</h3>
                <div>
                  <a href="">
                    <img src="/help.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/help2.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/help3.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
