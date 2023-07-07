import React, { useState } from 'react';

const ChangeColor = () => {
  const [color, setColor] = useState('rgb(0, 0, 0)');
  const [timerId, setTimerId] = useState(null);

  const mouseEnter = () => {
    setTimerId(
      setInterval(() => {
        const newColor = generateRandomColor();
        setColor(newColor);
      }, 1000)
    );
  };

  const mouseLeave = () => {
    clearInterval(timerId);
  };

  const mouseDoubleClick = () => {
    clearInterval(timerId);
  };

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div
      style={{ width: '255px', height: '255px', backgroundColor: color }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onDoubleClick={mouseDoubleClick}></div>
  );
};

export default ChangeColor;
