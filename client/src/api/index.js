import axios  from 'axios'
const url = "http://localhost:5000"
const API = axios.create({baseURL: url})
export  const fetchposts =()=> axios.get(url);
export const createpost = (post)=> axios.post(`${url}/create`, post)

export const updatepost = (id,post)=> axios.patch(`${url}/${id}`, post);

export const likepost = (id)=> axios.post(`${url}/like/${id}`);
export const deletepost = (id) => axios.get(`${url}/delete/${id}`)
export const login= (userdata)=> axios.post(`${url}/user/login`, userdata);
export const register = (userdata)=> axios.post(`${url}/user/register`, userdata);