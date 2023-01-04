import React from 'react';
import AppLayout from '../../layouts/AppLayout';

const EmptyCart = () => {
    return (
        <AppLayout>
            <div className="emptyCart">
                <h1 className="title">Cart is Empty!</h1>
            </div>
        </AppLayout>
    );
}

export default EmptyCart;