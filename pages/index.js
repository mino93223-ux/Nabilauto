import React from 'react';
import cars from '../data/cars.json';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Nabil Auto Car Dealership</h1>
      <img src="/nabil-auto-logo.png" alt="Nabil Auto Logo" />
      <h2>Our Car Models</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.model} - {car.price} DZD
          </li>
        ))}
      </ul>
      <Link href="/booking">Book a Car</Link>
    </div>
  );
};

export default Home;
