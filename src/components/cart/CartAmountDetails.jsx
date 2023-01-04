import React from 'react';

const CartAmountDetails = ({subTotal, shippingCost, discount, totalCost}) => {
    return (
            <div className="cartTotalPriceBox">
                <div className="cartPriceBox subTotalBox">
                    <p>Sub total</p>
                    <p>{subTotal}Tk</p>
                </div>
                <div className="cartPriceBox shippingCostBox">
                    <p>Shipping Cost</p>
                    <p>{shippingCost}Tk</p>
                </div>
                <div className="cartPriceBox shippingCostBox">
                    <p>Discuont</p>
                    <p>{discount}Tk</p>
                </div>
                <div className="cartPriceBox totalCostBox">
                    <p>TOTAL COST </p>
                    <p>{totalCost}Tk</p>
                </div>
            </div>
    );
}

export default CartAmountDetails;