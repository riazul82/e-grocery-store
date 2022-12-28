import React, { useEffect, useState } from 'react';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const VoucherCard = ({ data }) => {
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
                const day = (data.cardNo === '01') ? '20' : '10';
                const time = (data.cardNo === '01') ? '12:00:00' : '10:10:20';
                
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
            createInfiniteCountdown(data.endDate);
        }, 1000);

        return (() => clearTimeout(timeCount));
    });

    return (
        <div className="voucherCardWrap">
            <p className="voucherCardTitle">{data.title}</p>
            <p className="voucherCardSubTitle">Voucher Code</p>
            <div className="voucherCodeBox">
                {data.code.split('').map((ch, index) => {
                    return <div className="codeBox" key={index}>{ch}</div>
                })}
            </div>
            <div className="voucherTimer">
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

            <p className="voucherMessage">{data.require}</p>
        </div>
    );
}

export default VoucherCard;