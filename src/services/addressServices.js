import * as httpRequest from '~/utils/httpRequest';

export const getAddress = async () => {
    try {
        const res = await httpRequest.get('Address');

        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createAddressType = async (typeName) => {
    try {
        const res = await httpRequest.post('Address', {
            tenLoai: typeName,
        });
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateAddressType = async (typeId, typeName) => {
    try {
        const res = await httpRequest.put(`Address/${typeId}`, {
            tenLoai: typeName,
        });

        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const deleteAddressType = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`Address/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
