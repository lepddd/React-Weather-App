import { useState } from "react";

const InputCityContainer = ({ handleClick, loading }) => {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div className="flex flex-col items-center gap-2.5 p-5 bg-neutral-50 rounded shadow-xl">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            className="border border-neutral-400 rounded px-6 py-2.5 outline-neutral-500"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Enter city name..."
          />
          <button
            onClick={() => handleClick(city)}
            className="w-fit bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-50 text-sm px-3 py-2 rounded"
          >
            Search
          </button>
        </>
      )}
    </div>
  );
};
export default InputCityContainer;
