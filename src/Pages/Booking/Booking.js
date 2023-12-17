import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Booking.module.scss';

//Service
import * as bookServices from '~/services/bookServices';

const cx = classNames.bind(styles);

function Booking() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookServices.getBook();
            if (result) {
                setBookings(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Lich Đặt</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã đặt</th>
                        <th>Ngày đặt</th>
                        <th>Thời gian đặt</th>
                        <th>Ghi chú</th>
                        <th>Mã khách hàng</th>
                        <th>Mã cửa hàng</th>
                        <th>Mã dịch vụ</th>
                        <th>Mã nhân viên</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={`booking-${index}`}>
                            <td>{booking.bookingID}</td>
                            <td>{booking.startDate}</td>
                            <td>{booking.startTime}</td>
                            <td>{booking.note}</td>
                            <td>{booking.customerID}</td>
                            <td>{booking.storeID}</td>
                            <td>{booking.serID}</td>
                            <td>{booking.employeID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Booking;
