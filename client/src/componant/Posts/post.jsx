import {  useDispatch } from 'react-redux'
import { likepost, deletepost } from '../../actions/posts'
import {FaThumbsUp, FaPenAlt, FaTrash} from 'react-icons/fa'
const Post = ({ post , curruntid , setcurruntid }) => {
    const  dispatch = useDispatch();
    function handeldeletepost(id){
        dispatch(deletepost(id));
    }    

    function handellikepost(id){
        dispatch(likepost(id));
    }

    return (
        <div className="Post">
            <p onClick={ ()=>setcurruntid(post._id)}><FaPenAlt></FaPenAlt></p>
            <p>post creator : {post.creator}</p>
            <p>post title : {post.title}</p>
            <p>post messages :{post.message}</p>
            <p> post title of the page :{post.title}</p>

            <p onClick= {()=> handellikepost(post._id)} ><FaThumbsUp></FaThumbsUp>{  post.likeCount}</p>
            <p onClick= {()=>{handeldeletepost(post._id)}}><FaTrash></FaTrash></p>
            <hr/>
            </div>
    )
}
export default  Post;