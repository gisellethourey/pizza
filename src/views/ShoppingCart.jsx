import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';

const ShoppingCart = () => {
    const navigate = useNavigate(); 
    const { cart, calculateTotal, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="container mt-5" style={{ paddingTop: '50px', backgroundColor: '#f2f2f2', marginLeft:'auto' }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Detalles del pedido:</h4>
                    <div style={{ padding: '20px', marginBottom: '20px', backgroundColor:'white' }}>
                        {cart.length === 0 ? (
                            <p>El carrito está vacío</p>
                        ) : (
                            <>
                                {cart.map((pizza, index) => (
                                    <div key={index} className="cart-item" style={{ borderBottom: '2px solid #f2f2f2', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                                            <span>{pizza.name}</span>
                                        </div>
                                        <div className="quantity-buttons">
                                            <span style={{ color: 'blue' }}>${pizza.price}</span>
                                            <Button variant="danger" onClick={() => decreaseQuantity(index)}>-</Button>
                                            <span style={{ margin: '0 5px' }}>{pizza.quantity}</span>
                                            <Button variant="primary" onClick={() => increaseQuantity(index)}>+</Button>
                                        </div>
                                    </div>
                                ))}
                                <h3>Total: ${calculateTotal()}</h3>
                                <Button variant="success" onClick={() => navigate('/checkout')}>Ir a Pagar</Button> 
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
