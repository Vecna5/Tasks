import React, { useState } from 'react';
import { Howl } from 'howler';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ColorGrid({ colors }) {
  const sound = new Howl({ src: ['/sound.mp3'] });
  const [selectedColor, setSelectedColor] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleColorClick = (color, event) => {
    sound.play();
    setSelectedColor(color.color);
    setCoords({ x: event.clientX, y: event.clientY });
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        className="color-grid"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="back-button">Back</Link>
        {colors.map((color) => (
          <CopyToClipboard key={color.name} text={color.color}>
            <motion.div
              className="color-box"
              style={{ backgroundColor: color.color }}
              onClick={(event) => handleColorClick(color, event)} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {color.color}
            </motion.div>
          </CopyToClipboard>
        ))}
      </motion.div>

      {}
      {isAnimating && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: selectedColor,
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '24px',
            transition: 'background-color 0.5s ease',
          }}
        >
          {`Coordinates: (${coords.x}, ${coords.y})`}
        </div>
      )}
    </>
  );
}

export default ColorGrid;
