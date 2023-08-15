const LocationForm = ({handleSubmit}) => {
  return (
    <main className="flex p-3 justify-center">
      <form className="flex gap-3" onSubmit={handleSubmit}>
          <input 
            className="text-black outline-none min-w-[180px]" 
            min={1} 
            id="newLocation"
            max={126} 
            placeholder="  type a location id ..." 
            type="number" 
          />         
        <button>Search</button>
      </form>
    </main>
  )
}

export default LocationForm;