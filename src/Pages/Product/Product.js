import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from './Product.module.scss';
import Image from '~/components/common/Image';
import Button from 'react-bootstrap/Button';

import { ModalDelete } from '~/components/feature/ModalProduct';

//Service
import * as productServices from '~/services/productServices';

const cx = classNames.bind(styles);

function Product() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataProductDelete, setDataProductDelete] = useState({});
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productServices.getProduct();
            if (result) {
                setProducts(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddRole = () => {
        navigate('/booking/product/addProduct');
    };

    const handleEdit = (product) => {
        navigate(`/booking/product/editProduct`, { state: { product: product } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (product) => {
        setIsShowModalDelete(true);
        setDataProductDelete(product);
    };

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
                        <th>Chức Năng</th>
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

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(product)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(product)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddRole}>
                    Thêm Product
                </Button>
            </div>

            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose}
                dataProductDelete={dataProductDelete}
                setProducts={setProducts}
            />
        </div>
    );
}

export default Product;
