
import React, { useState } from 'react';
import colorsData from '../colors.json';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleColorClick = (color, coordinates) => {
    setSelectedColor(color);
    setCoords(coordinates);
    setIsAnimating(true);
    const audio = new Audio('./public/sound.mp3');
    audio.play();

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div>
      {colorsData.map((item, index) => (
        <div
          key={index}
          onClick={() => handleColorClick(item.color, item.coordinates)}
          style={{
            backgroundColor: item.color,
            width: '100px',
            height: '100px',
            display: 'inline-block',
            cursor: 'pointer',
            margin: '5px',
          }}
        ></div>
      ))}

      {isAnimating && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: selectedColor,
            transition: 'background-color 0.5s ease',
            zIndex: 9999,
          }}
        >
          <div style={{ color: 'white', position: 'absolute', top: coords.y, left: coords.x }}>
            {`Coordinates: (${coords.x}, ${coords.y})`}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
