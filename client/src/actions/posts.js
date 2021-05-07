import * as api from '../api/index';

export const getposts = ()=> async (dispatch)=>{
   try{
       const { data } =  await api.fetchposts();
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