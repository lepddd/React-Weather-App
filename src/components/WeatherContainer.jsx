import WeatherCard from "./WeatherCard";

const WeatherContainer = ({data,handleClick,city}) => {

  return (
    <div>
      <div className=" w-full mb-1 text-center font-bold rounded bg-gradient-to-r from-neutral-800 to-neutral-900 text-neutral-50 py-2">{city}</div>
      <div className="grid grid-cols-2 grid-rows-4 gap-1 w-fit sm:grid-cols-4 sm:grid-rows-2 min-w-[280px]">
        {data.map(({ day, temp, icon, now }, index) => (
          <WeatherCard key={index} day={day} temp={temp} now={now} icon={icon} reset={handleClick}/>
          ))}
      </div>
    </div>  
    
  );
};

export default WeatherContainer;
