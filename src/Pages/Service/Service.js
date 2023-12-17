import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Service.module.scss';
//Service
import * as serviceServices from '~/services/serviceServices';
const cx = classNames.bind(styles);

function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await serviceServices.getService();
            if (result) {
                setServices(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Dịch Vụ</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã dịch vụ</th>
                        <th>Tên dịch vụ</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Loại dịch vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={`service-${index}`}>
                            <td>{service.serID}</td>
                            <td>{service.serName}</td>
                            <td>{service.serDescription}</td>
                            <td>{service.serPrice}</td>
                            <td>{service.serCateID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Service;
