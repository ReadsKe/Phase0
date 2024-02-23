import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PetStoreContext } from '../context/PetStoreContext';

function HomePage() {
  const { petStores, fetchPetStoreById } = useContext(PetStoreContext);

  return (
    <div className="container mt-5">
      <p>A selection of Best Pet Stores to adopt your lifetime Companion!</p>
      <ul className="list-group">
        {petStores.map(petStore => (
          <li key={petStore.id} className="list-group-item">
            <div onClick={() => fetchPetStoreById(petStore.id)}>
              <Link to={`/petstores/${petStore.id}`}>
                {petStore.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
