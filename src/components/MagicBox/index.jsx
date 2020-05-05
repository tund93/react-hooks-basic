import React, { useState, useEffect } from 'react'


const getRandomColor = () => {
    const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}

const useMagicColor = () => {
    const [color, setColor] = useState(() => {
        const currentColor = localStorage.getItem('box_value' || 'deeppink');
        return currentColor
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newColor = getRandomColor();
            setColor(newColor);
            localStorage.setItem('box_value', newColor);
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    return color;
}

export default function MagicBox() {
    const color = useMagicColor();
    return (
        <div style={{ backgroundColor: color, width: '200px', height: '200px' }}></div>

    )
}
