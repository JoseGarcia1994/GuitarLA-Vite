import '../styles/cart.css';
import {useState, useEffect} from 'react';

const Cart = ({cart, updateQty, deleteProduct}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = cart.reduce( (total, product) => total + (product.qty * product.price), 0)
        setTotal(calculateTotal)
      }, [cart])

    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="cart__content">
                <div className="cart">
                    <h3>Items</h3>

                    {cart.length === 0 ? 'Empty Cart' : (
                        cart.map( product => (
                            <div key={product.id} className='product'>
                                <div>
                                    <img src={product.image} alt={`Product Image ${product.image}`} />
                                </div>

                                <div>
                                    <p className='name'>{product.name}</p>
                                    <p>Qunatity:</p>

                                    <select 
                                    value={product.qty} 
                                    className='select'
                                    onChange={e => updateQty({
                                        qty: +e.target.value,
                                        id: product.id
                                    })}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>


                                    <p className='price'>$ <span>{product.price}</span></p>
                                    <p className='subtotal'>Subtotal: $ <span>{product.qty * product.price}</span></p>
                                </div>
                                <button
                                type='button'
                                className='btn_delete'
                                onClick={ () => deleteProduct(product.id)}
                                >X</button>
                            </div>
                        ) )
                    )}
                </div>
                
                <aside className="cart__resume">
                    <h3>Order Details</h3>
                    <p>Total: ${total}</p>
                </aside>
            </div>
        </main>
    );
};

export default Cart;