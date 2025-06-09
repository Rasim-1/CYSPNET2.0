import React, { useState } from 'react';
import s from './Gratitude.module.scss';

const allNames = [
  
        ['Анна Ива', 'Дима Орлов', 'Вика Золотова', 'Сергей Смирн', 'Наташа Петрова', 'Игорь Солов'],
        ['Оля Лисина', 'Паша Зубов', 'Кирилл Алекс', 'Алина Шест', 'Миша Гусев', 'Маша Белова'],
        ['Денис Коваль', 'Ира Мороз', 'Лена Кузнец', 'Коля Титов', 'Антон Павл', 'Anomidae'],
        ['Таня Сергеева', 'Артур Василь', 'Юля Егорова', 'Вася Князев', 'Андрей Попов', 'Люда Роман'],
        ['Лёша Фадеев', 'Вова Сидоров', 'Рита Волкова', 'Илья Захар', 'Галя Боброва', 'Тимур Грин'],
        ['Женя Синицын', 'Катя Орлова', 'Стёпа Лебедев', 'Олег Мельник', 'Артём Ворон', 'N. Smith'],
        ['Алиса Котова', 'Федя Журавлёв', 'Рома Игнатьев']

      
];

const Gratitude = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleColumns = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(allNames[(startIndex + i) % allNames.length]);
    }
    return result;
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % allNames.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + allNames.length) % allNames.length);
  };

  return (
    <div className={s.gratitude}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.title}>
            <h2>Страница благодарностей</h2>
            <p>На этой странице отображются имена или никнеймы людей, которые вложили свой вклад в развитие проекта</p>
          </div>

          <div className={s.navigation}>
            <button onClick={handlePrev} className={`${s.arrow} ${s.right}`}><img src="/arrow.png" alt="" /></button>

            <div className={s.names}>
              {getVisibleColumns().map((column, idx) => (
                <div className={s.name} key={idx}>
                  {column.map((name, i) => (
                    <p key={i}>{name}</p>
                  ))}
                </div>
              ))}
            </div>

            <button onClick={handleNext} className={`${s.arrow} ${s.left}`}><img src="arrow.png" alt="" /></button>
          </div>

          <div className={s.info}>
            <h3>Как сюда попасть:</h3>
            <ul>
              <a href=""><li>Пожертвования на разных платформах</li></a>
             <a href=""> <li>Предложения и идеи</li></a>
             <a href=""> <li>Нахождение багов и ошибок</li></a>
             <a href=""> <li>Любая другая помощь</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
