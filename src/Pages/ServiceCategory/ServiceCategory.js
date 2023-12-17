import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './ServiceCategory.module.scss';
//Service
import * as serviceCategoryServices from '~/services/serviceCategoryServices';

const cx = classNames.bind(styles);

function ServiceCategory() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await serviceCategoryServices.getServiceCategory();
            if (result) {
                setServices(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Loại Dịch Vụ</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã loại dịch vụ</th>
                        <th>Tên loại dịch vụ</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={`service-${index}`}>
                            <td>{service.serCateID}</td>
                            <td>{service.serCateName}</td>
                            <td>{service.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ServiceCategory;
