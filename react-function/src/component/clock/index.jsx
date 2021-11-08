import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}
function Clock(props) {
    const [clock, setclock] = useState('');
    useEffect(() => {
        const ClockInterval = setInterval(() => {
            const now = new Date();
            const newTime = formatDate(now);
            setclock(newTime);
            
        }, 1000);
        return () => {
            clearInterval(ClockInterval);
        }
    }, [])

    return (
        <div>
            <p style={{'fontSize' : '42px'}}>{clock}</p>
        </div>
    );
}

export default Clock;