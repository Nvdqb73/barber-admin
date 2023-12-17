import React from 'react';
import CIcon from '@coreui/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { cilBell, cilCalculator, cilCursor, cilNotes, cilPuzzle, cilSpeedometer } from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import classNames from 'classnames/bind';

import styles from './_nav.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} className={cx('nav-icon')} />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: CNavTitle,
        name: 'Components',
    },
    {
        component: CNavGroup,
        name: 'Account',
        to: '/account',
        icon: <CIcon icon={cilPuzzle} className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'User',
                to: '/account/user',
            },
            {
                component: CNavItem,
                name: 'Role',
                to: '/account/role',
            },
            {
                component: CNavItem,
                name: 'Customer',
                to: '/account/customer',
            },
            {
                component: CNavItem,
                name: 'Employee',
                to: '/account/employee',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Booking',
        to: '/booking',
        icon: <CIcon icon={cilCursor} className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'Service',
                to: '/booking/service',
            },
            {
                component: CNavItem,
                name: 'ServiceCategory',
                to: '/booking/serviceCategory',
            },
            {
                component: CNavItem,
                name: 'booking',
                to: '/booking/bookings',
            },
            {
                component: CNavItem,
                name: 'Producer',
                to: '/booking/producer',
            },
            {
                component: CNavItem,
                name: 'Product',
                to: '/booking/product',
            },
            {
                component: CNavItem,
                name: 'Category',
                to: '/booking/category',
            },
            {
                component: CNavItem,
                name: 'Order',
                to: '/booking/order',
            },
            {
                component: CNavItem,
                name: 'ProductOrder',
                to: '/booking/productOrder',
            },
            {
                component: CNavItem,
                name: 'Payment',
                to: '/booking/payment',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Stores',
        icon: <CIcon icon={cilNotes} className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'Store',
                to: '/stores/store',
            },
            {
                component: CNavItem,
                name: 'Warehouse',
                to: '/stores/warehouse',
            },
            {
                component: CNavItem,
                name: 'WorkingHour',
                to: '/stores/workingHour',
            },
            {
                component: CNavItem,
                name: 'ServiceManagement',
                to: '/stores/serviceManagement',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Notifications',
        icon: <CIcon icon={cilBell} className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'Notification',
                to: '/notifications/Notification',
            },
            {
                component: CNavItem,
                name: 'Evaluate',
                to: '/notifications/evaluate',
            },
        ],
    },
    ,
    {
        component: CNavGroup,
        name: 'Location',
        icon: <CIcon icon={cilCalculator} className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'LocationStore',
                to: '/location/locationStore',
            },
            {
                component: CNavItem,
                name: 'Country',
                to: '/location/country',
            },
            {
                component: CNavItem,
                name: 'City',
                to: '/location/city',
            },
            {
                component: CNavItem,
                name: 'Address',
                to: '/location/address',
            },
        ],
    },
    {
        component: CNavTitle,
        name: 'Extras',
    },
    {
        component: CNavGroup,
        name: 'Settings',
        icon: <IconSettings className={cx('nav-icon')} />,
        items: [
            {
                component: CNavItem,
                name: 'Login',
                to: config.routes.login,
            },
            {
                component: CNavItem,
                name: 'Register',
                to: config.routes.register,
            },
            {
                component: CNavItem,
                name: 'Error 404',
                to: config.routes.error404,
            },
            {
                component: CNavItem,
                name: 'Error 500',
                to: config.routes.error500,
            },
        ],
    },
];

export default _nav;
