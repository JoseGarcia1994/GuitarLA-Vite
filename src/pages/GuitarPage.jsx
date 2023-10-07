import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

const GuitarPage = ({ addToCart}) => {

    const [qty, setQty] = useState(0)
    const [guitar, setGuitar] = useState({});
    const { url } = useParams();

    useEffect(() => {
        getOneGuitar();
    }, [])

    const getOneGuitar = () => {
        axios
            .get(`https://guitarla-strapi-vzds.onrender.com/api/guitars?filters[url]=${url}&populate=image`)
            .then(res => setGuitar(res.data.data))
            .catch(err => console.error(err))
    }

    const image = guitar[0]?.attributes.image.data.attributes.url
    const name = guitar[0]?.attributes.name
    const price = guitar[0]?.attributes.price
    const description = guitar[0]?.attributes.description

    const handleSubmit = e => {
        e.preventDefault();

        if (qty < 1) {
            alert("Need to select Qty")
            return
        }

        const selectedGuitar = {
            id: guitar[0].id,
            image,
            name,
            price,
            qty
        }

        addToCart(selectedGuitar)
    }

    return (
        <>
            {guitar && guitar.length ? (
                <>
                    <main className='container guitar'>
                        <img className='image' src={image} alt={`guitar ${name}`} />

                        <div className='content'>
                            <h3>{name}</h3>
                            <p className='text'>{description}</p>
                            <p className='price'>${price}</p>

                            <form onSubmit={handleSubmit} className='form'>
                                <label htmlFor="quantity">Quantity</label>

                                <select
                                    onChange={e => setQty(parseInt(e.target.value))}
                                    id='quantity'>
                                    <option value="0">-- Select --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <input
                                    type="submit"
                                    value='Add to Cart'
                                />
                            </form>
                        </div>
                    </main>
                </>
            ) : (
                <>
                    <Loader />
                </>
            )}
        </>

    );
};

export default GuitarPage;