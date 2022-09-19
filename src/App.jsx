import WeatherContainer from "./components/WeatherContainer";
import InputCityContainer from "./components/InputCityContainer";
import axios from "axios";
import { INITIAL_STATE, weatherReducer } from "./weatherReducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  async function getData(city) {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(
        `http://hide-heroku-api.herokuapp.com/weather2?city=${city}`
      );
      const fullData = res.data.daily.data
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

  return (
    <div className="bg-neutral-300 min-h-screen p-1 flex justify-center items-center">
      {Object.keys(state.weather).length === 0 ? (
        <InputCityContainer
          loading={state.loading}
          handleClick={handleClick}
        />
      ) : (
        <WeatherContainer data={state.weather}/>
      )}
    </div>
  );
}

export default App;
