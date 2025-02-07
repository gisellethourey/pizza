import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PizzaDetail = () => {
    const { id } = useParams();
    const pizzas = useContext(PizzaContext);
    const { addToCart } = useContext(CartContext);
    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza) return null;

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card>
                                <Card.Img variant="top" src={selectedPizza.img} alt={selectedPizza.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                            </Card>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{ textAlign: 'left', marginTop: '20px' }}>
                            <h2 style={{marginBottom: '10px' }}>{selectedPizza.name}</h2>
                            <hr style={{ width: '100%', margin: 'auto', marginBottom: '10px' }} />
                            <p style={{ marginBottom: '10px' }}>{selectedPizza.desc}</p>
                            <p style={{  marginBottom: '10px' }}><strong>Ingredientes:</strong></p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {selectedPizza.ingredients.map((ingredient, index) => (
                                    <li key={index}>🍕 {ingredient}</li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-between">
                            <h2>Precio: ${selectedPizza.price}</h2>
                            <Button variant="danger" onClick={() => addToCart(selectedPizza)}>Añadir 🛒</Button>
                       </div> 
                       </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PizzaDetail;
