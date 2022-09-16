import WeatherCard from "./WeatherCard";
const WeatherContainer = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-1 w-fit sm:grid-cols-4 sm:grid-rows-2">
      <WeatherCard day={"2022-09-14"} temp={"16°C"} now={true} />
      <WeatherCard day={"2022-09-15"} temp={"16°C"} now={false} />
      <WeatherCard day={"2022-09-16"} temp={"16°C"} now={false} />
      <WeatherCard day={"2022-09-17"} temp={"16°C"} now={false} />
      <WeatherCard day={"2022-09-18"} temp={"16°C"} now={false} />
      <WeatherCard day={"2022-09-19"} temp={"16°C"} now={false} />
      <WeatherCard day={"2022-09-20"} temp={"16°C"} now={false} />
    </div>
  );
};

export default WeatherContainer;
