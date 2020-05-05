import React, { useState, useEffect } from 'react'

const formatDate = (date) => {
    if (!date) return;

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

export default function Clock() {
    const [TimeString, setTimeString] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <p style={{ fontSize: "42px" }}>{TimeString}</p>
    )
}
