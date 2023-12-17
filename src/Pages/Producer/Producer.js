import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Producer.module.scss';
//Service
import * as producerServices from '~/services/producerServices';

const cx = classNames.bind(styles);

function Producer() {
    const [producers, setProducers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await producerServices.getProducer();
            if (result) {
                setProducers(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Nhà Cung Cấp</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã nhà cung cấp</th>
                        <th>Tên nhà cung cấp</th>
                        <th>SDT</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {producers.map((producer, index) => (
                        <tr key={`producer-${index}`}>
                            <td>{producer.producerID}</td>
                            <td>{producer.producerName}</td>
                            <td>{producer.numberphone}</td>
                            <td>{producer.addressID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Producer;
