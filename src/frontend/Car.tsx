import React from 'react';
import { useEffect, useState } from 'react';

export const Car = () => {
  const [car, setCar] = useState({
    year: 0,
    brand: '',
    model: '',
    mileage: 0,
    location: '',
    image: '',
    engine: '',
    transmision: '',
    vin: '',
    color: '',
    safety: [],
    comfort: [],
    exterior: [],
    interior: [],
    entertainment: [],
    specs: [],
    others: [],
  });
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch('https://mhqwmz-3005.csb.app/api/cars');
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchCar();
  }, []);

  return (
    <div className="App">
      CARS
      <div>
        <span>
          {car.year} / {car.brand} / {car.model}
        </span>
        <div>
          Milleage: {car.mileage} <br /> Location: {car.location} <br />
        </div>
        <div>
          <img width="500" src={car.image} alt="Car Image" />
        </div>
        <div>
          Engine: {car.engine} <br /> Transmision: {car.transmision} <br /> VIN:{' '}
          {car.vin} <br /> Color: {car.color}
        </div>
        <div>
          Safety: {car.safety} <br /> Comfort: {car.comfort} <br /> Exterior:{' '}
          {car.exterior} <br /> Interior: {car.interior} <br /> Entertainment:{' '}
          {car.entertainment} <br /> Specs: {car.specs} <br /> Others:{' '}
          {car.others}
          <div />
        </div>
        ;
      </div>
    </div>
  );
};
