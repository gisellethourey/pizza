import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import Banner from "../components/Banner";
import Button from 'react-bootstrap/Button';

const Home = () => {
    const navigate = useNavigate();
    const pizzas = useContext(PizzaContext);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (pizza) => {
        addToCart(pizza);
    };

    return (
        <div>
            <Banner />
            <div className="container mt-5" style={{ paddingTop: '220px', width: '70%' }}>
                <div className="row">
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pizza.name}</h5>
                                    <hr style={{ width: '100%', margin: 'auto', marginBottom: '10px' }} />
                                    <p className="card-text fw-bold">Ingredientes:</p>
                                    <ul className="list-unstyled">
                                        {pizza.ingredients.map((ingredient, index) => (
                                            <li key={index}>🍕{ingredient}</li>
                                        ))}
                                    </ul>
                                    <hr style={{ width: '100%', margin: 'auto', marginBottom: '10px' }} />
                                    <h3 className="card-text d-flex justify-content-center"> ${pizza.price}</h3>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary" style={{ width: '45%' }} onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver Más👀</button>  
                                        <Button variant="danger" onClick={() => handleAddToCart(pizza)} style={{ width: '45%' }}>Añadir 🛒</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
