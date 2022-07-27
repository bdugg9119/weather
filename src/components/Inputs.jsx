import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

const Inputs = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState('');

  const handleUnitsChange = e => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }
  const handleSearchClick = () => city !== '' && setQuery({q: city});
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching user location.');
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!');
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    }
  };

  return (
    <div className='flex flex-row justify-center my-6 '>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          placeholder='Search...'
          className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none'
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={event => event.key === 'Enter' && handleSearchClick()}
        />
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleLocationClick}
        />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button
          name='metric'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className='text-white text-xl mx-1'>|</p>
        <button
          name='imperial'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;