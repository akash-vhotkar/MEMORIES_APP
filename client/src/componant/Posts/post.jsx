const  Post = ({post})=>{
    return (
        <div className="Post">
        <h1>creator : {post.creator}</h1>
        <h1>title : {post.title}</h1>
        <h1>message : {post.message}</h1>
           
        
        </div>
    )
}
export default  Post;