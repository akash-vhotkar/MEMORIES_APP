import {useSelector} from 'react-redux';
import Post from './post'
const Posts = ({curruntid , setcurruntid})=>{
    const posts = useSelector(state => state.posts)

    console.log("thise are the piosts ", posts.data,"  thise is type of " , typeof posts);
    return (
        <div className="Posts">
            <h1>all created posts </h1>
        {posts.map((post)=>(
            <div key={post._id}>
                <Post post={post} curruntid={curruntid} setcurruntid={setcurruntid}></Post>
            </div>
        ))}
        </div>
    )
}
export default  Posts;