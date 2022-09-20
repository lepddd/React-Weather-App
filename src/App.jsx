import WeatherContainer from "./components/WeatherContainer";
import InputCityContainer from "./components/InputCityContainer";
import axios from "axios";
import { INITIAL_STATE, weatherReducer } from "./weatherReducer";
import { useReducer,useState } from "react";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  const [city,setCity] = useState('')

  function removeAccents (name){
    const formated = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return formated
  }

  function FormatCityName (name) {
    const array = name.split(' ')
    const formated = array.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
    setCity(formated)
  }

  async function getData(city) {
    dispatch({ type: "FETCH_START" });
    FormatCityName(city)
    const formatCityName = removeAccents(city)
    try {
      const res = await axios.get(
        `http://hide-heroku-api.herokuapp.com/weather2?city=${formatCityName}`
      );
      const fullData = res.data.daily.data;
      const data = fullData.map((element, index) => {
        return {
          now: index === 0 ? true : false,
          day: element.day,
          temp: Math.floor(element.all_day.temperature),
          icon: element.icon,
        };
      });
      dispatch({ type: "FEATCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error.message);
    }
  }

  function handleClick(value) {
    getData(value);
  }

  function reset() {
    dispatch({ type: "RESET_CITY" });
  }

  return (
    <div className="bg-neutral-300 min-h-screen p-1 flex justify-center items-center min-w-max flex-col">
      {Object.keys(state.weather).length === 0 ? (
        <InputCityContainer loading={state.loading} handleClick={handleClick} />
      ) : (
        <WeatherContainer data={state.weather} handleClick={reset} city={city}/>
      )}
    </div>
  );
}

export default App;
