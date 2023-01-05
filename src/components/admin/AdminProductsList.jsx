import React from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const AdminProductsList = ({ productsList }) => {
    const navigate = useNavigate();

    const handleViewDetails = (productDetails) => {
        navigate(`/admin/products/${productDetails.productId}`, {state: productDetails});
    }

    return (
        <table className="dashboardList">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Weight</th>
                    <th>Discount</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsList.map((elem) => {
                        return (
                            <tr className="ordersTableItem" key={elem.productId}>
                                <td>{`#${elem.productId.slice(0, 6)}`}</td>
                                <td>{elem.name}</td>
                                <td>{elem.price}Tk</td>
                                <td>{`${elem.weight}${elem.unit === 'gram' ? 'gm' : elem.unit}`}</td>
                                <td>{elem.discount}%</td>
                                <td className="listDetailsBtn" onClick={() => handleViewDetails(elem)}>
                                    <span>view details</span>
                                    <RxDoubleArrowRight className="arrow" />
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default AdminProductsList;