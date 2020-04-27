import React, { useState } from 'react';
import './ColorBox.scss';

const getRandomColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {


  const [color, setcolor] = useState(() => {
    const initColor = localStorage.getItem('box_value') || 'deeppink';
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setcolor(newColor);
    localStorage.setItem('box_value', newColor);
  }
  return (
    <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxClick}>
      COLORBOX
    </div>
  )
}

ColorBox.propTypes = {

}

export default ColorBox

