import React from 'react'
import s from './Advantages.module.scss'
import { FaMicrophone, FaMedal, FaBolt, FaMoneyBillWave } from 'react-icons/fa'

const Advantages = () => {
    return (
        <div  className={s.advantages}>
            <div className="container">
                <div className={s.wrapper}>

                    <h2 className={s.title}>Наши преимущества</h2>
                    <div className={s.grid}>
                        <div className={s.cards}>

                            <div className={s.card}>
                                <FaMicrophone className={s.icon} />
                                <h3>Получите признание комьюнити</h3>
                                <p>
                                    Соберите фан-базу и делитесь своими достижениями!<br />
                                    Расскажите о себе в постах и комментариях своего профиля.
                                </p>
                            </div>
                            <div className={s.arrow}>
                                <img src="./arro.png" alt="" />
                            </div>
                        </div>
                        <div className={s.cards}>
                            <div className={s.card}>
                                <FaMedal className={s.icon} />
                                <h3>Попадите в топ-пользователей</h3>
                                <p>
                                    Развивайте свои навыки и получайте оценки и отзывы других пользователей!<br />
                                    Вы ведь хотите стать лучшим в своей отрасли?
                                </p>
                            </div>
                            <div className={s.arrow}>
                                <img src="./arro1.png" alt="" />
                            </div>

                        </div>
                        <div className={s.cards}>
                            <div className={s.card}>

                                <FaBolt className={s.icon} />
                                <h3>Используйте возможности на максимум</h3>
                                <p>
                                    Попробуйте себя в роли тренера, аналитика и комментатора<br />
                                    или организуйте свой собственный турнир!
                                </p>
                            </div>

                            <div className={s.arrow}>
                                <img src="./arro2.png" alt="" />
                            </div>

                        </div>
                        <div className={s.cards}>

                            <div className={s.card}>
                                <FaMoneyBillWave className={s.icon} />
                                <h3>Монетизируйте свои навыки</h3>
                                <p>
                                    Заработайте деньги за счёт своих<br />
                                    навыков в разных отраслях киберспорта
                                </p>
                            </div>
                            <div className={s.arrow}>
                                <img src="./arro3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages
