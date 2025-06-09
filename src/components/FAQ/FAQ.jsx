import React, { useState } from 'react'
import s from './FAQ.module.scss'

const faqData = [
  {
    question: 'Чем я могу помочь в роли тестировщика?',
    answer:
      'Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! А если у тебя есть опыт в тестировании проектов, то это ещё лучше!',
  },
  {
    question: 'Что ещё я получу за тестирование проекта?',
    answer:
      'Участники тестирования получат ранний доступ к платформе, возможность повлиять на её развитие, а также особые привилегии в будущих релизах. Самые активные тестировщики могут рассчитывать на дополнительные бонусы.',
  },
  {
    question: 'Я могу заниматься проведением турниров?',
    answer:
      'Да, конечно! Если у тебя есть желание и организаторские навыки, ты можешь подать заявку на проведение турниров. Мы предоставим всю необходимую информацию и поддержку.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div id='FAQ' className={s.faq}>
      <div className="container">
        <div className={s.wrapper}>
          {/* Заголовок вынесен из аккордеона */}

          {/* Аккордеон с вопросами */}
          <div className={s.faq__container}>
          <h2 className={s.title}>FAQ</h2>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${s.faq__item} ${activeIndex === index ? s.open : ''}`}
              >
                <div
                  className={s.questionRow}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className={s.question}>{item.question}</h3>
                  <span className={`${s.arrow} ${activeIndex === index ? s.open : ''}`}>
                    <img src="./arrow.png" alt="arrow" />
                  </span>
                </div>
                <div className={s.answerWrapper}>
                  <p className={s.answer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
