const WeatherCard = ({ temp, day, now }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const splited = day.split("-");

  const weekDay = days[new Date(splited).getDay()];

  return (
    <div
      className={`relative flex px-11 py-5 justify-between items-center rounded ${
        now
          ? "py-11 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 col-span-2 h-fit self-end sm:col-span-1 sm:row-span-2 sm:h-full sm:flex-col"
          : "flex-col bg-neutral-50 gap-3.5 justify-self-center"
      }`}
    >
      {now && 
      <p className="absolute top-3 left-3 flex text-xs font-bold text-neutral-50 p-1 rounded bg-blue-500 ">NOW</p>
      }
      <p
        className={`font-sans  ${
          now ? "text-3xl text-neutral-50" : "text-xl text-neutral-400"
        }`}
      >
        {weekDay}
      </p>
      <img className={` ${now ?'w-12 h-12 sm:h-16 sm:w-16': 'w-12 h-12'}`} src="./icons/medium/10.png" alt="icon" />
      <p
        className={`font-sans  ${
          now ? "text-3xl text-neutral-50" : "text-xl text-neutral-400"
        }`}
      >
        {temp}
      </p>
    </div>
  );
};
export default WeatherCard;
