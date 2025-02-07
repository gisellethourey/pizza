import pizzaImage from '../assets/img/pizza.jpg';

const Banner = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid bg-primary text-white"
      style={{
        backgroundImage: `url(${pizzaImage})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        height: '170px', 
        position: 'absolute', 
        top: '40px', 
        left: '0',
        right: '0', 
        zIndex: '0',
      }}
    >
      <div className="container">
        <h1 className="display-4 mt-4">¡Pizzeria Mamma Mia!</h1>
        <hr style={{ width: '80%', margin: 'auto', marginBottom: '10px' }} />
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

export default Banner;