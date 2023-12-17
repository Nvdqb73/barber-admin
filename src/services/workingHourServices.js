import * as httpRequest from '~/utils/httpRequest';
export const getWorkingHour = async () => {
    try {
        const res = await httpRequest.get('WorkingHour');
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const getWorkingHourById = async (id) => {
    try {
        const res = await httpRequest.get(`WorkingHour/${id}`, {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createWorkingHour = async (startDate, startTime, note, customerID, storeID, serID, employeID) => {
    try {
        const res = await httpRequest.post('WorkingHour', {
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

export const updateWorkingHour = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`WorkingHour/${id}`, {
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

export const deleteWorkingHour = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`WorkingHour/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
