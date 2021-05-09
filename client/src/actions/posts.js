import { FaRaspberryPi } from 'react-icons/fa';
import * as api from '../api/index';

export const getposts = ()=> async (dispatch)=>{
   try{
       const { data } =  await api.fetchposts();
       console.log("  thise is alldata ",data.data);
       dispatch({type:"FETCH_ALL", payload: data});
     

   } catch(err){
       if(err) console.log(err);
   }

}
export const createpost  = (post)=> async (dispatch)=>{
    try{
        const {data } = await api.createpost(post);
        console.log("thise is data ",data);
        dispatch({type:"CREATE",payload: data})

    }catch(err){
        if(err) console.log(err);
    }

}

export const likepost = (id)=> async (dispatch)=>{
    try{
        const {data} = await api.likepost(id);
        dispatch({type:"LIKE", payload: data});

    }
    catch(err){
        if(err) console.log(err);
    }
}
export const deletepost = (id)=> async (dispatch)=>{
    try{
        const {data} = await api.deletepost(id);
        dispatch({type:"DELETE", payload: data});
    }
    catch(err){
        if(err) console.log(err);
    }
    
}
export const updatepost = (id, post)=> async (dispatch)=>{
    try{
        const {data}= await api.updatepost(id,post);
        dispatch({type:"UPDATE", payload: data});
        

    }
    catch(err){
        if(err) console.log(err);
    }
}