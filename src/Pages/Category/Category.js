import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Category.module.scss';
//Service
import * as categoryProductServices from '~/services/categoryProductServices';

const cx = classNames.bind(styles);

function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryProductServices.getCategory();
            if (result) {
                setCategory(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Loại Sản Phẩm</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã loại sản phẩm</th>
                        <th>Tên loại sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((categoryItem, index) => (
                        <tr key={`category-${index}`}>
                            <td>{categoryItem.cateID}</td>
                            <td>{categoryItem.cateName}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Category;
