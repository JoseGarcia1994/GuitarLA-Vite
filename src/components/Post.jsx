import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helper';

const Post = ({post}) => {

    const {content, image, title, url, publishedAt} = post.attributes

    return (
        <article className="post">
            <img className="image" src={image.data.attributes.formats.small.url} alt={`post image ${title}`} />
            <div className="content">
                <h3>{title}</h3>
                <p className='date'>{formatDate(publishedAt)}</p>
                <p className="resume">{content}</p>
                <Link className='link' to={`/post/${url}`}>View Post</Link>
            </div>
        </article>
    );
};

export default Post;