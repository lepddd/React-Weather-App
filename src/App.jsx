import { useState } from 'react'
import WeatherCard from './components/WeatherCard';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-300 min-h-screen p-1 flex justify-center items-center'>
      <WeatherContainer/>
    </div>
  );
}

export default App
