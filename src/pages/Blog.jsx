import '../styles/Blog.css';
import PostList from '../components/PostList';

const Blog = ({posts}) => {
    return (
        <main className="container">
            <PostList 
            posts={posts}
            />
        </main>
    );
};

export default Blog;