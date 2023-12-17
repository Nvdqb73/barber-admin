import * as httpRequest from '~/utils/httpRequest';
export const getWarehouse = async () => {
    try {
        const res = await httpRequest.get('Warehouse');
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const getWarehouseById = async (id) => {
    try {
        const res = await httpRequest.get(`Warehouse/${id}`, {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createWarehouse = async (startDate, startTime, note, customerID, storeID, serID, employeID) => {
    try {
        const res = await httpRequest.post('Warehouse', {
            startDate,
            startTime,
            note,
            customerID,
            storeID,
            serID,
            employeID,
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateWarehouse = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`Warehouse/${id}`, {
            tenBH: name,
            noiDungBH: content,
            content: video,
            video: video,
            maKH: courseCode,
        });

        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const deleteWarehouse = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`Warehouse/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
