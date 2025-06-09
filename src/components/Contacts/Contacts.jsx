import React from "react";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={s.contact}>
        <div className="container">
          <div className={s.wrapper}>
            <h2 className={s.title}>Контакты</h2>
           
              <div className={s.box}>
           
                <div className={s.info}>
                  <h4>Email:</h4>
                  <a className={s.link} href="">ceo@cyspnet.com</a>
                </div>

                <div className={s.social}>
                  <h4>Социальные сети</h4>
                  <div>
                  <a href=""><img src="./foo1.png" alt="" /></a>
                  <a href=""><img src="./foo2.png" alt="" /></a>
                  <a href=""><img src="./foo3.png" alt="" /></a>
                  <a href=""><img src="./foo4.png" alt="" /></a>
                  <a href=""><img src="./foo5.png" alt="" /></a>

                  </div>
                 
                </div>
              </div>
         
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Contacts;
