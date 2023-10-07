import Post from "./Post";

const PostList = ({posts}) => {
    return (
        <div>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map( post => (
                    <Post 
                    key={post.id}
                    post={post}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostList;