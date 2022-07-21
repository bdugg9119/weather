import React from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
			<div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
				<p>Cloudy</p>
			</div>
			<div className='flex flex-row items-center justify-between text-white py-3'>
				<img src="" alt="imageWeather" className='w-20' />
				<p className='text-5xl'>34°</p>
			
				<div className='flex flex-col space-y-2'>
					<div className=' flex font-light text-sm items-center justify-center'>
						<UilTemperature size={18} className='mr-1'/>
						Real Feel:
						<span className='font-medium ml-1'>33°</span>
					</div>
			
					<div className=' flex font-light text-sm items-center justify-center'>
						<UilTear size={18} className='mr-1' />
						Humidity:
						<span className='font-medium ml-1'>33%</span>
					</div>

					<div className=' flex font-light text-sm items-center justify-center'>
						<UilWind size={18} className='mr-1'/>
						Wind:
						<span className='font-medium ml-1'>33</span>
					</div>
				</div>

			</div>

			<div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'></div>
    </div>
  )
}

export default TempAndDetails