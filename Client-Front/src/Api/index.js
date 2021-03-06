import axios from "axios";
 
const url = "http://localhost:8000/user";
 
export const getUser = () => axios.get(url);
 
export const createUser = (newUser) => axios.post(url, newUser); 

export const SearchUser = (IDtosearch) => axios.get(url,IDtosearch);  

export const updateUser = (Location) => axios.put(url, {Location:Location});

//export const updatePassword = (newdata) =>axios.put(url, {ID: newdata.ID, password: newdata.password})

export const NewLocation = (UserData) =>{
   if (typeof UserData.Location !== "undefined") {
      axios.put(url, {ID: UserData.ID, Location: UserData.Location});
   }
   else if (typeof UserData.password !== "undefined"){
      axios.put(url, {ID: UserData.ID, password: UserData.password});
   }
}


