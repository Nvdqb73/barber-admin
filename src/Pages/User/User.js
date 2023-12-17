import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import ModalDeleteUser from '~/components/feature/ModalsUser';
import styles from './User.module.scss';

//Service
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);
function User() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userServices.getUser();
            if (result) {
                setUsers(result);
            }
        };

        fetchApi();
    }, []);

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (user) => {
        setIsShowModalDelete(true);
        setDataUserDelete(user);
    };

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Người Dùng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã Người Dùng</th>
                        <th>Tên Đăng Nhập</th>
                        <th>Mật Khẩu</th>
                        <th>RoleID</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={`user-${index}`}>
                            <td>{user.userID}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td>{user.roleID}</td>
                            <td className={cx('btn-action')}>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(user)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ModalDeleteUser
                show={isShowModalDelete}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
                setUsers={setUsers}
            />
        </div>
    );
}

export default User;
