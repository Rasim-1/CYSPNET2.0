import React, { useEffect, useRef, useState } from 'react';
import s from './Scroll.module.scss';

const Scroll = ({ sectionCount }) => {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const isScrolling = useRef(false);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('[data-section]');
    const section = sections[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling.current) return;
      const direction = e.deltaY > 20 ? 1 : e.deltaY < -20 ? -1 : 0;

      if (direction === 0) return;

      let nextIndex = activeRef.current + direction;
      nextIndex = Math.max(0, Math.min(sectionCount - 1, nextIndex));

      if (nextIndex !== activeRef.current) {
        isScrolling.current = true;
        setActive(nextIndex);
        activeRef.current = nextIndex;
        scrollToSection(nextIndex);

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // блокируем на 1 сек
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [sectionCount]);

  return (
    <div className={s.wrapper}>
      {Array.from({ length: sectionCount }).map((_, i) => (
        <div
          key={i}
          className={`${s.dot} ${i === active ? s.active : ''}`}
          onClick={() => {
            if (isScrolling.current || i === activeRef.current) return;
            setActive(i);
            activeRef.current = i;
            scrollToSection(i);
            isScrolling.current = true;
            setTimeout(() => {
              isScrolling.current = false;
            }, 1000);
          }}
        />
      ))}
    </div>
  );
};

export default Scroll;
