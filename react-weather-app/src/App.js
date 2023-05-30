import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key= "a17a5b89bd202e1238bf0133c3f41851";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() =>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])
  console.log(search);
  return (
    <div className="App">
      <div className='mb-3 pt-0 '>
        <input 
          onChange={(e)=>setSearch(e.target.value)}
          className='px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 shadow outline-none' 
          type ="text" placeholder='City'
        />
        <City city={city}/>
      </div>
    </div>
  );
}

export default App;
