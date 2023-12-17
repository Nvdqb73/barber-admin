import * as httpRequest from '~/utils/httpRequest';

export const getProducer = async () => {
    try {
        const res = await httpRequest.get('Producer');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProducerById = async (id) => {
    try {
        const res = await httpRequest.get(`Producer/${id}`, {
            params: {},
        });
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createProducer = async (name, content, video, courseCode) => {
    try {
        const res = await httpRequest.post('Producer', {
            tenBH: name,
            noiDungBH: content,
            video: video,
            maKH: courseCode,
        });
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateProducer = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`Producer/${id}`, {
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

export const deleteProducer = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`Producer/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
