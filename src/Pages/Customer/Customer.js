import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Customer.module.scss';
import Image from '~/components/common/Image';

//Service
import * as customerService from '~/services/customerService';

const cx = classNames.bind(styles);

function Customer() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.getCustomer();
            if (result) {
                setCustomers(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Khách Hàng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã Khách Hàng</th>
                        <th>Họ & Tên Lót</th>
                        <th>Tên</th>
                        <th>Hình</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Ngày Sinh</th>
                        <th>Mã Người Dùng</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={`customer-${index}`}>
                            <td>{customer.customerID}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>

                            <th>
                                <Image src={customer.picture} alt={customer.lastName} width="120" height="100" />
                            </th>
                            <td>{customer.email}</td>
                            <td>{customer.numberphone}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.userID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Customer;
