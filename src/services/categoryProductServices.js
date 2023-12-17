import * as httpRequest from '~/utils/httpRequest';

export const getCategory = async () => {
    try {
        const res = await httpRequest.get('Category');

        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createCategoryType = async (typeName) => {
    try {
        const res = await httpRequest.post('Category', {
            tenLoai: typeName,
        });
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateCategoryType = async (typeId, typeName) => {
    try {
        const res = await httpRequest.put(`Category/${typeId}`, {
            tenLoai: typeName,
        });

        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const deleteCategoryType = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`Category/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
