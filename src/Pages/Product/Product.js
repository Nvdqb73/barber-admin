import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Product.module.scss';
import Image from '~/components/common/Image';

//Service
import * as productServices from '~/services/productServices';

const cx = classNames.bind(styles);

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productServices.getProduct();
            if (result) {
                setProducts(result);
            }
        };

        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Sản Phẩm</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Mô tả</th>
                        <th>Mã NSX</th>
                        <th>Mã Kho</th>
                        <th>Mã Loại SP</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={`product-${index}`}>
                            <td>{product.proID}</td>
                            <td>{product.proName}</td>
                            <th>
                                <Image src={product.proImage} alt={product.proImage} width="120" height="100" />
                            </th>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.proDescription}</td>
                            <td>{product.producerID}</td>
                            <td>{product.warehouseID}</td>
                            <td>{product.cateID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Product;
