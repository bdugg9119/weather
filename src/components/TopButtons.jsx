import React from 'react';

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "Pittsburgh"
    },
    {
      id: 2,
      title: "Tokyo"
    },
    {
      id: 3,
      title: "Sydney"
    },
    {
      id: 4,
      title: "London"
    },
    {
      id: 5,
      title: "Rio"
    },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(city => (
        <button
          key={city.id}
          className='text-white text-lg font-medium'>{city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;