import axios  from 'axios'
const url = "http://localhost:5000"
export  const fetchposts =()=> axios.get(url);
export const createpost = (post)=> axios.post(url, post)