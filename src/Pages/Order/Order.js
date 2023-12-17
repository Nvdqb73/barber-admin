import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Order.module.scss';

//Service
import * as orderServices from '~/services/orderServices';

const cx = classNames.bind(styles);

function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await orderServices.getOrder();
            if (result) {
                setOrders(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Đặt Hàng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã đặt</th>
                        <th>Ngày đặt</th>
                        <th>Trạng thái</th>
                        <th>Mã khách hàng</th>
                        <th>Mã thanh toán</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={`order-${index}`}>
                            <td>{order.orderID}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.customerID}</td>
                            <td>{order.payID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Order;
