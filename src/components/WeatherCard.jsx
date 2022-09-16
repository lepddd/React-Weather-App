import { useEffect, useState } from "react";

const WeatherCard = ({ temp, day, icon, now }) => {
  const [weekDay, setWeekDay] = useState("");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getWeekDay() {
    const splitedDate = day.split("-");
    return days[new Date(splitedDate).getDay()];
  }

  useEffect(() => {
    setWeekDay(getWeekDay());
  }, []);

  return (
    <div
      className={`relative flex justify-between items-center rounded ${
        now
          ? "py-11 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 col-span-2 h-fit self-end sm:col-span-1 sm:row-span-2 sm:h-full sm:flex-col md:py-14 md:px-8 transition-all"
          : "px-11 py-5 flex-col bg-neutral-50 gap-3.5 justify-self-center md:px-14 md:py-7 transition-all"
      }`}
    >
      {now && (
        <p className="absolute top-3 left-3 flex text-xs font-bold text-neutral-50 p-1 rounded bg-blue-500 ">
          NOW
        </p>
      )}
      <p
        className={`font-sans  ${
          now ? "text-3xl text-neutral-50" : "text-xl text-neutral-400"
        }`}
      >
        {weekDay}
      </p>
      <img
        className={` ${now ? "w-12 h-12 sm:h-16 sm:w-16" : "w-12 h-12"}`}
        src={`./icons/medium/${icon}.png`}
        alt="icon"
      />
      <p
        className={`font-sans  ${
          now ? "text-3xl text-neutral-50" : "text-xl text-neutral-400"
        }`}
      >
        {temp}°C
      </p>
    </div>
  );
};
export default WeatherCard;
