import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import Title from './components/Title'

function App() {

  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation);
  }

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err));

  }

  useEffect(() => {

    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, [])

  return (
    <main className='bg-black min-h-screen text-white'>
      <Title />
      <LocationForm handleSubmit={handleSubmit}/>
      <h2 className='flex justify-center p-3 text-green-500'>!Welcome to the crazy universe!</h2>
      <hr />
      <LocationInfo currentLocation={currentLocation}/>
      <hr className='p-5'/>
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
      
  </main>
  );
}

export default App;



