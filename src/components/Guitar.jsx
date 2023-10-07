import { Link } from 'react-router-dom';
 
const Guitar = ({guitar}) => {

    const {description, name, price, url, image} = guitar.attributes

    return (
        <div className="guitar">
            <img src={image?.data.attributes.formats.medium.url} alt="guitar img" />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>

                <Link className='link' to={`/guitars/${url}`}>View Product</Link>
            </div>
        </div>
    );
};

export default Guitar;