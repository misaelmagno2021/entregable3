const LocationInfo = ({currentLocation}) => {
  
  return (
    <section className="grid justify-center p-3">
        <h2 className="flex justify-center text-lg py-2">{currentLocation?.name}</h2>
        <ul className="flex justify-between gap-5 text-sm">
           <li>Type: {currentLocation?.type}</li>
           <li>Dimension: {currentLocation?.dimension}</li>
           <li>Population: {currentLocation?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationInfo