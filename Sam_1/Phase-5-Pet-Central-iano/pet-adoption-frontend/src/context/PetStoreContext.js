import React, { createContext, useState, useEffect } from 'react';

export const PetStoreContext = createContext();

const PetStoreContextProvider = ({ children }) => {
  const [petStores, setPetStores] = useState([]);
  const [selectedPetstore, setSelectedPetstore] = useState(null);
  const [onChange, setOnChange] = useState(false);

  // Fetch pet stores
  useEffect(() => {
    console.log("Fetching pet stores...");
    fetch('/petstores')
      .then(res => res.json())
      .then(response => {
        setPetStores(response);
      })
      .catch(error => console.error('Error fetching pet stores:', error));
  }, [onChange]);

  // Fetch pet store by ID
  const fetchPetStoreById = (petstoreId) => {
    fetch(`/petstores/${petstoreId}`)
      .then((res) => res.json())
      .then((response) => {
        setSelectedPetstore(response);
      })
      .catch(error => console.error('Error fetching pet store by ID:', error));
  }

  // Context data
  const contextData = {
    petStores,
    selectedPetstore,
    fetchPetStoreById,
    onChange,
    setOnChange,
  };

  return (
    <PetStoreContext.Provider value={contextData}>
      {children}
    </PetStoreContext.Provider>
  );
};

export default PetStoreContextProvider;
