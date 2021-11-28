import axios from "axios";
 
const url = "http://localhost:8000/user";
 
export const getUser = () => axios.get(url);
 
export const createUser = (newUser) => axios.post(url, newUser); 

export const SearchUser = (IDtosearch) =>{
    axios.get(url,IDtosearch);  
    console.log("from api: ",IDtosearch);
}     
// export const deleteUser = (id) => axios.delete(`${url}/${id}`); 

export const updateUser = (Location) => axios.put(url, {Location:Location});

