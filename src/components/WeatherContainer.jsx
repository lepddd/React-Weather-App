import WeatherCard from "./WeatherCard";

const WeatherContainer = ({data}) => {

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-1 w-fit sm:grid-cols-4 sm:grid-rows-2">
      {data.map(({ day, temp, icon, now }, index) => (
        <WeatherCard key={index} day={day} temp={temp} now={now} icon={icon} />
      ))}
    </div>
  );
};

export default WeatherContainer;
