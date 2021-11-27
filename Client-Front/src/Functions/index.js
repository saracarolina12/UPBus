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

export const createUser = async({ID, password}) => {
    try {
        const {data} = await api.createUser({ID, password});
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const SearchUser = async(ID)=>{
    try{
        api.SearchUser(ID);
        return `${ID} was found`; 
    }catch(error){
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
