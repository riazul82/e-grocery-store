import React from 'react';

const AlertBox = ({active, msg, getResponseData}) => {
    const handleConfirm = () => {
        getResponseData('confirm');
    }

    const handleCancel = () => {
        getResponseData('cancle');
    }

    return (
        <div className={`alertBox ${active && 'active'}`}>
            <div className="alertBoxContent">
                <p className="alertMessage">{msg}</p>
                <div className="alertBoxBtns">
                    <button onClick={handleCancel} className="cancleBtn">Cancel</button>
                    <button onClick={handleConfirm} className="confirmBtn">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default AlertBox;