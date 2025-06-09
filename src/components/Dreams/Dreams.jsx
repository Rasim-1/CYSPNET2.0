import React, { useState, useRef } from 'react'
import s from './Dreams.module.scss'

const roles = [
  {
    label: 'Игрок',
    description: 'Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами.',
    icon: '/card1.png'
  },
  {
    label: 'Тренер',
    description: 'Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград.',
    icon: '/card2.png'
  },
  {
    label: 'Организатор',
    description: 'Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч.',
    icon: '/card3.png'
  },
  {
    label: 'Судья',
    description: 'Оценивает пользователей и сообщества сайта. Этих участников сайта могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.',
    icon: '/card4.png'
  },
  {
    label: 'Аналитик',
    description: 'Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.',
    icon: '/card5.png'
  },
  {
    label: 'Комментатор',
    description: 'Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей.',
    icon: '/card6.png'
  },
  {
    label: 'Скаут',
    description: 'Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов показателей найденных пользователей или сообществ будет меняться его рейтинг.',
    icon: '/card7.png'
  }
]

const Dreams = () => {
  const [activeRole, setActiveRole] = useState('Аналитик')
  const tabListRef = useRef(null)

  const scrollTabs = (direction) => {
    const currentIndex = roles.findIndex(role => role.label === activeRole)

    let newIndex
    if (direction === 'left') {
      newIndex = currentIndex === 0 ? roles.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === roles.length - 1 ? 0 : currentIndex + 1
    }

    setActiveRole(roles[newIndex].label)

    // Центрируем вкладку
    const container = tabListRef.current
    const tabElements = container?.querySelectorAll(`.${s.tab}`)
    const activeTab = tabElements?.[newIndex]
    if (activeTab && container) {
      const tabOffset = activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2
      container.scrollTo({ left: tabOffset, behavior: 'smooth' })
    }
  }

  const currentDescription = roles.find(role => role.label === activeRole)?.description

  return (
    <div className={s.dreams}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={s.title}>Выберите, кем хотите стать</h2>

          <div className={s.tabControls}>
            <button onClick={() => scrollTabs('left')} className={`${s.arrow} ${s.left}`}>
              <img src="/arrow.png" alt="Previous" />
            </button>

            <div className={s.tabs} ref={tabListRef}>
              {roles.map((role) => (
                <div
                  key={role.label}
                  className={`${s.tab} ${activeRole === role.label ? s.active : ''}`}
                  onClick={() => setActiveRole(role.label)}
                >
                  <img src={role.icon} alt={role.label} className={s.icon} />
                  <span>{role.label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => scrollTabs('right')} className={`${s.arrow} ${s.right}`}>
              <img src="/arrow.png" alt="Next" />
            </button>
          </div>

          <div className={s.description}>
            <p>{currentDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dreams
