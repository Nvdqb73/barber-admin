const account = '/account/role';
const routes = {
    //Not Found
    error404: '/404',
    error500: '/500',

    //Login
    login: '/login',

    //Register
    register: '/register',

    //Admin
    home: '/',
    dashboard: '/dashboard',
    role: '/account/role',
    addRole: `${account}/addRole`,
    editRole: `${account}/editRole`,
    user: '/account/user',
    customer: '/account/customer',
    employee: '/account/employee',
    service: '/booking/service',
    serviceCategory: '/booking/serviceCategory',
    booking: '/booking/bookings',
    producer: '/booking/producer',
    product: '/booking/product',
    categoryProduct: '/booking/category',
    order: '/booking/order',
    productOrder: '/booking/productOrder',
    payment: '/booking/payment',
    store: '/stores/store',
    warehouse: '/stores/warehouse',
    workingHour: '/stores/workingHour',
    serviceManagement: '/stores/serviceManagement',
    notification: '/notifications/Notification',
    evaluate: '/notifications/evaluate',
    locationStore: '/location/locationStore',
    country: '/location/country',
    city: '/location/city',
    address: '/location/address',
};

export default routes;
