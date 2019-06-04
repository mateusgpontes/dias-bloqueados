import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import dates from "./bloqueados";
import "react-day-picker/lib/style.css";
import parse from "date-fns/parse";

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
      <DayPicker
        disabledDays={dates.map(date => {
          let dateDay = parse(date.day);
          return new Date(dateDay);
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
