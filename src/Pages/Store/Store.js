import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Store.module.scss';

//Service
import * as storeServices from '~/services/storeServices';

const cx = classNames.bind(styles);

function Store() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await storeServices.getStore();
            if (result) {
                setStores(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Cửa Hàng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã cửa hàng</th>
                        <th>Tên của hàng</th>
                        <th>SDT</th>
                        <th>Mã giờ mở cửa</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store, index) => (
                        <tr key={`store-${index}`}>
                            <td>{store.storeID}</td>
                            <td>{store.storeName}</td>
                            <td>{store.numberphone}</td>
                            <td>{store.workingHourID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Store;
