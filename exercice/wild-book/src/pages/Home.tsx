
import React, { useContext } from 'react';
import '../App.css';
import WilderCard from "../components/Wildercard"
import { wildersContext } from '../contexts/WildersContext';

const Home = () => {
  const {wilders} = useContext(wildersContext);
  return (
    
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {
            wilders.map((wilder, index) => {
              return (
                <WilderCard
                  key={index}
                  id={wilder.id}
                  name={wilder.name}
                  city={wilder.city}
                  skills={wilder.skills}
                />
              );
            })
          }
        </section>
      </main>
  );
}

export default Home;