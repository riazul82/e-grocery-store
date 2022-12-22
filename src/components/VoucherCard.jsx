import React from 'react';

const VoucherCard = () => {
    return (
        <div className="voucherCardWrap">
            <p className="voucherCardTitle">250tk off for new registered user</p>
            <p className="voucherCardSubTitle">Voucher Code</p>
            <div className="voucherCodeBox">
                <div className="codeBox">N</div>
                <div className="codeBox">E</div>
                <div className="codeBox">W</div>
                <div className="codeBox">U</div>
                <div className="codeBox">S</div>
                <div className="codeBox">E</div>
                <div className="codeBox">R</div>
                <div className="codeBox">2</div>
                <div className="codeBox">3</div>
            </div>
            <div className="voucherTimer">
                <div className="timerBox day">
                    <p className="timeCount">00</p>
                    <p className="timerText">days</p>
                </div>
                <div className="timerBox hour">
                    <p className="timeCount">00</p>
                    <p className="timerText">hours</p>
                </div>
                <div className="timerBox minute">
                    <p className="timeCount">00</p>
                    <p className="timerText">Minutes</p>
                </div>
                <div className="timerBox second">
                    <p className="timeCount">00</p>
                    <p className="timerText">Seconds</p>
                </div>
            </div>

            <p className="voucherMessage">
                Voucher only applicable for new user and for more than Rs.500
            </p>
        </div>
    );
}

export default VoucherCard;