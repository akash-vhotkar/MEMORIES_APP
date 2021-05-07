import {useSelector} from 'react-redux';
import Post from './post'
const Posts = ()=>{
    const posts = useSelector(state => state.posts)
    console.log("thise are the piosts ", posts);
    return (
        <div className="Posts">
            <h1>posts are </h1>
        {posts.map(post=>(
            <div key={post._id}>
                <Post post={post}></Post>
            </div>
        ))}
        </div>
    )
}
export default  Posts;