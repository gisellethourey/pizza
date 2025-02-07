import { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../pizzas.json');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PizzaContext.Provider value={pizzas}>
      {children}
    </PizzaContext.Provider>
  );
};
