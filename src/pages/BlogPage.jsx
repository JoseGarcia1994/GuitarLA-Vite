import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDate } from '../utils/helper';
import Loader from '../components/Loader';

const BlogPage = () => {

    const { url } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        getOneBlog();
    }, [])

    const getOneBlog = () => {
        axios
            .get(`https://guitarla-strapi-vzds.onrender.com/api/posts?filters[url]=${url}&populate=image`)
            .then(res => setBlog(res.data.data))
            .catch(err => console.error(err))
    }

    return (
        <>
            {blog && blog.length ? (
                <>
                    <article className="container post mt-3">
                        <img className="image" src={blog[0]?.attributes?.image?.data?.attributes?.url} alt={`post image ${blog[0]?.attributes?.title}`} />
                        <div className="content">
                            <h3>{blog[0]?.attributes?.title}</h3>
                            <p className='date'>{formatDate(blog[0]?.attributes?.publishedAt)}</p>
                            <p className="text">{blog[0]?.attributes?.content}</p>
                        </div>
                    </article>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default BlogPage;