import classNames from 'classnames/bind';
import { memo, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditProduct.module.scss';

import * as ProductServices from '~/services/productServices';

const cx = classNames.bind(styles);

function ModalEditProduct() {
    const [proID, setProID] = useState('');
    const [proName, setProName] = useState('');
    const [proImage, setProImage] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [proDescription, setProDescription] = useState('');
    const [producerID, setProducerID] = useState('');
    const [warehouseID, setWarehouseID] = useState('');
    const [cateID, setCateID] = useState('');

    const location = useLocation();
    const findId = location.state.product;

    const navigate = useNavigate();

    useEffect(() => {
        if (findId !== undefined) {
            setProID(findId?.proID);
            setProName(findId?.proName);
            setProImage(findId?.proImage);
            setPrice(findId?.price);
            setQuantity(findId?.quantity);
            setProDescription(findId?.proDescription);
            setProducerID(findId?.producerID);
            setWarehouseID(findId?.warehouseID);
            setCateID(findId?.cateID);
        } else {
            toast.error('Vui lòng chọn product khác!');
            navigate('/booking/product');
        }
    }, [findId, navigate]);

    const handleEditProduct = async () => {
        const result = await ProductServices.updateProduct(
            proID,
            proName,
            proImage,
            price,
            quantity,
            proDescription,
            producerID,
            warehouseID,
            cateID,
        );
        if (result) {
            setProID('');
            setProName('');
            setProImage('');
            setPrice('');
            setQuantity('');
            setProDescription('');
            setProducerID('');
            setWarehouseID('');
            setCateID('');
            toast.success('Chỉnh sửa product thành công!');
            navigate('/booking/product');
        } else {
            toast.error('Chỉnh sửa product thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-role')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên sản phẩm </Form.Label>
                        <Form.Control
                            value={proName}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp tên..."
                            onChange={(e) => {
                                setProName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Ảnh</Form.Label>
                        <Form.Control
                            value={proImage}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp ảnh..."
                            onChange={(e) => {
                                setProImage(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            value={price}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp giá..."
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control
                            value={quantity}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp giá..."
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                            value={proDescription}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp mô tả..."
                            onChange={(e) => {
                                setProDescription(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>ID nhà sản xuất</Form.Label>
                        <Form.Control
                            value={producerID}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp id nhà sản xuất..."
                            onChange={(e) => {
                                setProducerID(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>ID kho</Form.Label>
                        <Form.Control
                            value={warehouseID}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp id kho..."
                            onChange={(e) => {
                                setWarehouseID(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>ID loại</Form.Label>
                        <Form.Control
                            value={cateID}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp id loại..."
                            onChange={(e) => {
                                setCateID(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/booking/product')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditProduct()}>
                    Sửa
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditProduct);
