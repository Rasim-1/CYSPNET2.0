import React, { useRef, useState } from 'react';
import s from './Cards.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Cards = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsData = [
    { image: 'https://cyspnet.com/_astro/slider-5-user-11.C20QQPtB_Z1LzLh.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-13.GdMAd2j9_1Mr81b.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-10.DKvyOH7Z_ZIUc6j.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-12.DmR0jDKx_eJe1H.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-9.Cew0IKd6_ZAlwnu.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-8.C6ChFmy9_Ig7oo.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-7.lA_bjChK_GGMds.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-6.CMdfZucq_1bRNo1.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-5.B1JR08ex_1k9DJX.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-4.o7Y1nAcl_2hHWNz.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-3.DTZ3qKDc_Z1XKShs.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-2.Dlryub0E_16ymNP.webp' },
    { image: 'https://cyspnet.com/_astro/slider-5-user-1.DEno_ARk_Z2jK1TF.webp' }
  ];

  return (
    <div id='cards' className={s.cards}>
      <div className={`${s.container_solo} "container"`}>
        <div className={s.wrapper}>
          <div ref={prevRef} className={`${s.navButton} ${s.prev}`}>
            <img src="arrow.png" alt="" />
          </div>
          <div ref={nextRef} className={`${s.navButton} ${s.next}`}>
          <img src="arrow.png" alt="" />
          </div>

          <Swiper
  modules={[Navigation]}
  spaceBetween={10}
  slidesPerView={5}
  centeredSlides
  loop
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}

  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.realIndex);
  }}
  className={s.swiper}
>

            {cardsData.map((card, index) => {
              // Рассчитаем дистанцию от активного слайда
              let diff = index - activeIndex;
              // при loop индексы могут "сбиваться" - нормализуем для цикличности
              const len = cardsData.length;
              if (diff > len / 2) diff -= len;
              if (diff < -len / 2) diff += len;

              // Классы по масштабу
              let scaleClass = '';
              if (diff === 0) scaleClass = s.scaleLarge;       // центр — большой
              else if (Math.abs(diff) === 1) scaleClass = s.scaleMedium; // рядом — средний
              else if (Math.abs(diff) === 2) scaleClass = s.scaleSmall;  // дальше — маленький
              else scaleClass = s.scaleTiny;                    // остальные — очень маленькие

              return (
                <SwiperSlide key={index}>
                  <div className={`${s.card} ${scaleClass}`}>
                    <img src={card.image} alt={`Player ${index + 1}`} className={s.image} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          


        </div>
          <div className={s.text}>
            <h2>Ваши персональные карточки</h2>
            <p>У каждого пользователя, команды и даже сообщества есть личная карточка с рейтингом и информацией. Она упрощает поиск и общение между пользователями.</p>
          </div>
      </div>
    </div>
  );
};

export default Cards;
