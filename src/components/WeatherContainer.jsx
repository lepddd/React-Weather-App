import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
const WeatherContainer = () => {
  const url = "http://hide-heroku-api.herokuapp.com/weather2?city=juiz de fora";

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      const response = res.data.daily.data;
      const data = response.map((element, index) => {
        return {
          now: index === 0 ? true : false,
          day: element.day,
          temp: Math.floor(element.all_day.temperature),
          icon: element.icon,
        };
      });
      setData(data);
    }
    
    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-1 w-fit sm:grid-cols-4 sm:grid-rows-2">
      {data.map(({ day, temp, icon, now }, index) => (
        <WeatherCard key={index} day={day} temp={temp} now={now} icon={icon} />
      ))}
    </div>
  );
};

export default WeatherContainer;
