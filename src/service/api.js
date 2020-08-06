import axios from "axios";

export default axios.create({
  //baseURL: "http://192.168.100.214:8000/api/v1",
  
  baseURL: "http://164.90.219.137/api/v1",
  headers: {
   Accept : 'application/json',
    "Content-Type": 'application/json',
    'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Headers':'*',
    //'Access-Control-Allow-Methods':'*'
  },
  withCredentials: false,
});