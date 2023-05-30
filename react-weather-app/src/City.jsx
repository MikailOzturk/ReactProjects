import React from 'react'

const City = ({city}) => {
  console.log(city);
  return (
    <div>
      <div>
        <h2 className='text-4xl'>{city.name}</h2>
        <h2 className='text-5xl'>{city.main.temp}</h2>
        <h2 className='text-3xl'>{city.weather[0].main}</h2>
      </div>
    </div>
  )
}

export default City