const WeatherCard = ({ temp, day, now }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const splited = day.split("-");

  const weekDay = days[new Date(splited).getDay()];

  return (
    <div
      className={`flex px-11 py-5 justify-between items-center rounded ${
        now
          ? "py-11 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 col-span-2"
          : "flex-col bg-neutral-50 gap-3.5 justify-self-center"
      }`}
    >
      <p
        className={`font-sans  ${
          now ? "text-3xl text-neutral-50" : "text-xl text-neutral-400"
        }`}
      >
        {weekDay}
      </p>
      <img className="w-12 h-12" src="./icons/medium/10.png" alt="icon" />
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
