import * as api from "../Api/index.js";

export const getUser = async() => {
    try {
        const {data} = await api.getUser();
        // console.log("dataaa: ",data);
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const createUser = async({title, content}) => {
    try {
        const {data} = await api.createUser({title, content});
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

// export const deleteUser = async(id) => {
//     try {
//         await api.deleteUser(id);
//         return `${id} deleted successfully`;
//     }catch (error) {
//         console.log(error)
//     }
// }
