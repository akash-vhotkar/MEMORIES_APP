import axios  from 'axios'
const url = "http://localhost:5000"
export  const fetchposts =()=> axios.get(url);
export const createpost = (post)=> axios.post(url, post)

export const updatepost = (id,post)=> axios.patch(`${url}/${id}`, post);

export const likepost = (id)=> axios.post(`${url}/like/${id}`);
export const deletepost = (id) => axios.get(`${url}/delete/${id}`)