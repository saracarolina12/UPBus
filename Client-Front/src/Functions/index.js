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

// export const createUser = async({ID, password}) => {
//     try {
//         const {data} = await api.createUser({ID, password});
        
//         return data;
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

export const SearchUser = async({ID})=>{
    try {
        const {data} = await api.SearchUser({ID});
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const updateUser = async({Location}) => {
    try {
        await api.updateUser(Location)
        return `${Location} updated successfully`;
    }
    catch(error) {
        console.log(error);
    }
}

export const updatePassword = async({newdata}) =>{
    try{
        const {data} = api.updatePassword({newdata});
        return data;
    }
    catch(error){
        console.log(error);
    }
}
