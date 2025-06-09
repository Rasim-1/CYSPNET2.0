import React from 'react';
import s from './Info.module.scss';

const data = [
  { value: '112', label: 'Турниров проведено' },
  { value: '1789', label: 'Матчей сыграно' },
  { value: '3872', label: 'Пользователей зарегистрировано' },
  { value: '5800 $', label: 'Призового фонда выплачено' },
];

const radii = [300, 500, 700, 900];
const centerX = 1100;
const centerY = 600;

// Углы для расположения точек и текста: первый снизу (270°), второй сверху (90°), третий справа (0°), четвертый слева (180°)
const angles = [90, 270, 0, 180];

const describeCircle = (cx, cy, r) =>
  `M ${cx - r}, ${cy}
   A ${r},${r} 0 0,1 ${cx + r},${cy}
   A ${r},${r} 0 0,1 ${cx - r},${cy}`;

const polarToCartesian = (cx, cy, r, angleDeg) => {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
};

const Info = () => {
  return (
    <div id='statistics' className={s.info}>
      <svg className={s.svg} viewBox="0 0 2200 1200" preserveAspectRatio="xMidYMid meet">
        <defs>
          {radii.map((r, i) => (
            <path
              key={`path-${i}`}
              id={`circlePath-${i}`}
              d={describeCircle(centerX, centerY, r)}
              fill="none"
            />
          ))}
        </defs>

        {/* Пунктирные дуги */}
        {radii.map((r, i) => (
          <circle
            key={`circle-${i}`}
            cx={centerX}
            cy={centerY}
            r={r}
            fill="none"
            stroke="#888"
            strokeDasharray="10 10"
            strokeWidth="1.5"
          />
        ))}

        {/* Точки и текст */}
        {data.map((item, i) => {
          const radius = radii[i];
          const angle = angles[i];

          const dotPos = polarToCartesian(centerX, centerY, radius, angle);
          const textX = dotPos.x;
          const textY = dotPos.y + 20; // Отступ текста вниз от точки

          return (
            <g key={`label-${i}`}>
              {/* Красная точка по центру дуги */}
              <circle cx={dotPos.x} cy={dotPos.y} r="8" fill="red" />

              {/* Текст снизу точки */}
              <text
  fontSize="32"
  fontWeight="500"
  fill="#fff"
  textAnchor="middle"
  alignmentBaseline="hanging"
  x={textX}
  y={textY}
>
  <tspan x={textX} dy="20">{item.value} </tspan>
  <tspan x={textX} dy="1em"> {item.label}</tspan>
</text>

            </g>
          );
        })}
      </svg>

      {/* Центр — изображение дыры */}
      <img src="/dir.png" alt="black hole" className={s.hole} />
    </div>
  );
};

export default Info;
