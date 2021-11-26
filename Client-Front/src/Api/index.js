import axios from "axios";
 
const url = "http://localhost:8000/user";
 
export const getUser = () => axios.get(url);
 
export const createUser = (newUser) => axios.post(url, newUser); 
// export const deleteUser = (id) => axios.delete(`${url}/${id}`); 

