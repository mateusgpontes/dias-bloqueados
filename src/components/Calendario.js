import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import dates from "./bloqueados";
import "react-day-picker/lib/style.css";

function Calendario() {
  const [selectedDay, setSelectedDay] = useState(undefined);

  function handleDayClick(day, { selected }) {
    if (selected) {
      setSelectedDay(undefined);
      return;
    }
    setSelectedDay(day);
  }

  return (
    <div>
      {console.log(dates)}
      <DayPicker
        disabledDays={dates.map(date => {
          let day = new Date(date.day);
          let fuso = 3 * 10000000;
          let teste = day.getHours() + fuso;
          console.log((teste = new Date(day.getHours() + fuso)));
          return teste;
        })}
        onDayClick={handleDayClick}
        selectedDays={selectedDay}
      />
      {selectedDay ? (
        <p>You clicked {selectedDay.toLocaleDateString()}</p>
      ) : (
        <p>Please select a day</p>
      )}
    </div>
  );
}

export default Calendario;
