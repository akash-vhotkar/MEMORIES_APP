import * as api from '../api/index';

export const getposts = ()=> async (dispatch)=>{
   try{
       const { data } =  await api.fetchposts();
       dispatch({type:"FETCH_ALL", payload: data});
     

   } catch(err){
       if(err) console.log(err);
   }

}