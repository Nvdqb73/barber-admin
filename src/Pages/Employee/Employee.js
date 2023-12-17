import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Employee.module.scss';
import Image from '~/components/common/Image';

//Service
import * as employeeServices from '~/services/employeeServices';

const cx = classNames.bind(styles);

function Customer() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await employeeServices.getEmployee();
            if (result) {
                setEmployees(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Nhân Viên</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã Nhân Viên</th>
                        <th>Họ & Tên Lót</th>
                        <th>Tên</th>
                        <th>Hình</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Ngày Sinh</th>
                        <th>Ngày Vào Làm</th>
                        <th>Mã Người Dùng</th>
                        <th>Làm Tại Của Hàng</th>
                        <th>Mã Người Dùng</th>
                        <th>Địa Chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={`employee-${index}`}>
                            <td>{employee.employeID}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.picture}</td>

                            <th>
                                <Image src={employee.picture} alt={employee.lastName} width="120" height="100" />
                            </th>
                            <td>{employee.email}</td>
                            <td>{employee.numberphone}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.wordDay}</td>
                            <td>{employee.userID}</td>
                            <td>{employee.storeID}</td>
                            <td>{employee.addressID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Customer;
