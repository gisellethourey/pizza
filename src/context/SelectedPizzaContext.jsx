import { createContext, useState } from 'react';

export const SelectedPizzaContext = createContext();

export const SelectedPizzaProvider = ({ children }) => {
    const [selectedPizza, setSelectedPizza] = useState(null);

    return (
        <SelectedPizzaContext.Provider value={{ selectedPizza, setSelectedPizza }}>
            {children}
        </SelectedPizzaContext.Provider>
    );
};