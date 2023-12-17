import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Payment.module.scss';
//Service
import * as paymentServices from '~/services/paymentServices';

const cx = classNames.bind(styles);

function Payment() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await paymentServices.getPayment();
            if (result) {
                setPayments(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Loại Thanh Toán</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã loại thanh toán</th>
                        <th>Tên loại thanh toán</th>
                        <th>Trạng thai thanh toán</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={`payment-${index}`}>
                            <td>{payment.payID}</td>
                            <td>{payment.payMethod}</td>
                            <td>{payment.payStatus ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Payment;
