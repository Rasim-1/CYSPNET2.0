import React, { useState } from 'react'
import s from './Opportunity.module.scss'

const cards = [
  {
    title: 'Пользователям',
    slides: [
      { icon:'/icon/one1.png',text: 'Выступления на турнирах с призовым фондом' },
      { icon: '/icon/one2.png', text: 'Формула расчета навыка основанная на личных показателях' },
      { icon: '/icon/one3.png', text: 'Уникальные карточки профиля для пользователей' },
      { icon: '/icon/one4.png', text: 'Публикация постов и новостей на своей странице' },
      { icon: '/icon/one5.png', text: 'Создание клуба, команды или организации' },
      { icon: '/icon/one6.png', text: 'Развитие в одной или нескольких отраслях киберспорта' }
    ]
  },
  {
    title: 'Организациям',
    slides: [
      { icon: './icon/two1.png', text: 'Автоматизированная система проведения мероприятий' },
      { icon: './icon/two2.png', text: 'Огромное количество возможностей для настройки турниров' },
      { icon: './icon/two3.png', text: 'Найм пользователей из разных отраслей для проведения турниров' },
      { icon: './icon/two4.png', text: 'Возможность проведения платных мероприятий' }
    ]
  },
  {
    title: 'Клубам и командам',
    slides: [
      { icon: './icon/the1.png', text: 'Гарантированная выплата выигранных призов' },
      { icon: './icon/the2.png', text: 'Подписание контрактов с пользователями' },
      { icon: './icon/the3.png', text: 'Просмотр демо матчей для тренировок и разбора игры' },
      { icon: './icon/the4.png', text: 'Проведение товарищеских матчей с другими командами' }
    ]
  },
  {
    title: 'Аренам',
    slides: [
      { icon: './icon/fou1.png', text: 'Удобный и информационный профиль' },
      { icon: './icon/fou2.png', text: 'Система позволит привлечь новых клиентов' },
      { icon: './icon/fou3.png', text: 'Онлайн бронирование компьютеров через наш сайт' },
      { icon: './icon/fou4.png', text: 'Автоматизированная система проведения LAN мероприятий' },
      { icon: './icon/fou5.png', text: 'Найм организаторов для проведения мероприятий' },
      { icon: './icon/fou6.png', text: 'Возможность стать домашней ареной клуба или команды' }
    ]
  }
]

const Opportunity = () => {
  const [currentIndexes, setCurrentIndexes] = useState(cards.map(() => 0))

  const handleNext = (cardIndex) => {
    setCurrentIndexes(prev =>
      prev.map((val, i) =>
        i === cardIndex ? (val + 1) % cards[i].slides.length : val
      )
    )
  }

  const handlePrev = (cardIndex) => {
    setCurrentIndexes(prev =>
      prev.map((val, i) =>
        i === cardIndex ? (val - 1 + cards[i].slides.length) % cards[i].slides.length : val
      )
    )
  }

  return (
    <div id='possibilities' className={s.opportunity}>
      <div className="container">
        <h2 className={s.title}>Предоставляем массу возможностей</h2>
        <div className={s.cards}>
          {cards.map((card, index) => {
            const slide = card.slides[currentIndexes[index]]
            return (
              <div className={s.card} key={index}>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <div className={s.content}>
                  <button onClick={() => handlePrev(index)} className={s.arrow}>&larr;</button>
                  <div className={s.slide}>
                    <img src={slide.icon} alt="" className={s.icon} />
                    <p>{slide.text}</p>
                  </div>
                  <button onClick={() => handleNext(index)} className={s.arrow}>&rarr;</button>
                </div>
                <div className={s.dots}>
                  {card.slides.map((_, i) => (
                    <span
                      key={i}
                      className={`${s.dot} ${currentIndexes[index] === i ? s.activeDot : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Opportunity
