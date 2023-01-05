import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CallToAction = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        // initialize date object
        let dt = new Date();

        // get month_index and year
        let monthIndex = dt.getMonth();
        let year = dt.getFullYear();

        // create infinite countdown
        const createInfiniteCountdown = (date) => {
            let curntDate = Date.now();
            let endDate = new Date(date).getTime();
            
            let totalSeconds = (endDate - curntDate) / 1000;

            if (totalSeconds < 0) {
                // increase month
                monthIndex = (monthIndex + 1) % 12;
                
                // increase year if month is 'January'
                year = (monthIndex === 0) ? year + 1 : year;

                // create new day and time
                const day = '10';
                const time = '12:00:00';
                
                const endDate = new Date(`${monthNames[monthIndex]} ${day}, ${year} ${time}`).getTime();
                totalSeconds = (endDate - curntDate) / 1000;
            }

            // distribute seconds to days, hours, minutes and seconds
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds = totalSeconds % 86400;

            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds = totalSeconds % 3600;

            let minutes = Math.floor(totalSeconds / 60);
            totalSeconds = totalSeconds % 60;

            let seconds = Math.floor(totalSeconds);

            // fix single number output
            days = (days < 10) ? '0' + days : days;
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }

        // infinite countdown timer
        let timeCount = setInterval(() => {
            createInfiniteCountdown('January 10, 2023 12:00:00');
        }, 1000);

        return (() => clearTimeout(timeCount));
    });

    return (
        <div className="callToAction">
            <div className="callToActionTimer">
                <div className="timerBox day">
                    <p className="timeCount">{days}</p>
                    <p className="timerText">days</p>
                </div>
                <div className="timerBox hour">
                    <p className="timeCount">{hours}</p>
                    <p className="timerText">hours</p>
                </div>
                <div className="timerBox minute">
                    <p className="timeCount">{minutes}</p>
                    <p className="timerText">minutes</p>
                </div>
                <div className="timerBox second">
                    <p className="timeCount">{seconds}</p>
                    <p className="timerText">seconds</p>
                </div>
            </div>

            <div className="callToActionText">
                <p><span>Upto 50% Off</span> For Organic Products</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit voluptas fugiat numquam.</p>
            </div>

            <div className="callToActionBtn">
                <Link to="/products" className="link callToActionLink">Shop now</Link>
            </div>
        </div>
    );
}

export default CallToAction;