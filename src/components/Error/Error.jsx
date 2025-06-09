import React from "react";
import s from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className={s.error}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.error__container}>
              <img src="./error404.png" alt="" />
              <Link to="/" className={s.error__link}>
                Вернуться на главную
              </Link>
            </div>

            <div className={s.error__img}>
              <img src="./error.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
