import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './ProductOrder.module.scss';

//Service
import * as productOrderServices from '~/services/productOrderServices';

const cx = classNames.bind(styles);

function ProductOrder() {
    const [productOrders, setProductOrders] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productOrderServices.getProductOrder();
            if (result) {
                setProductOrders(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Xác Nhận Đặt Hàng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã xác nhận đặt</th>
                        <th>Sô lượng</th>
                        <th>Mã đặt hàng</th>
                        <th>Mã sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {productOrders.map((productOrder, index) => (
                        <tr key={`productOrder-${index}`}>
                            <td>{productOrder.proOrderID}</td>
                            <td>{productOrder.proOrderQuantity}</td>
                            <td>{productOrder.orderID}</td>
                            <td>{productOrder.customerID}</td>
                            <td>{productOrder.proID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductOrder;
