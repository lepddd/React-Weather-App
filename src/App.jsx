import { useState } from 'react'
import WeatherCard from './components/WeatherCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-300 min-h-screen p-1 flex justify-center items-center'>
      <div className='grid grid-cols-2 grid-rows-4 gap-1 bg-slate-400 w-fit'>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={true}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      <WeatherCard day={"2022-09-15"} temp={'16°C'} now={false}/>
      </div>
    </div>
  );
}

export default App
