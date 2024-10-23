import React, { useState } from "react";
import "./calendar.css";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const events = {
    "2024-10-04": { time: "10h30", name: "CONCERTO 1 CLARINETE" },
    "2024-10-12": { time: "9h30", name: "ENCONTRO" },
    "2024-10-15": { time: "19h00", name: "ESPÉTACULO DE ENCERRAMENTO" },
    "2024-10-30": { time: "20h30", name: "CONCERTO 2 GUITARRA" },
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const formatDate = (day) => {
    const month = (currentMonth + 1).toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");
    return `${currentYear}-${month}-${formattedDay}`;
  };

  const renderDays = () => {
    const days = [];
    const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="calendar__day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const formattedDate = formatDate(i);
      const event = events[formattedDate];
      const weekdayIndex = (firstDayIndex + i - 1) % 7;

      days.push(
        <div key={i} className="calendar__day">
          <span className="calendar__weekday">{weekdays[weekdayIndex]}</span>{" "}
          <span className="calendar__date">{i}</span>
          {event && (
            <div className="calendar__event">
              <p className="time">{event.time}</p>
              <p className="event-name">{event.name}</p>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button className="calendar__nav prev" onClick={handlePrevMonth}>
          {"<"}
        </button>
        <h2>
          {months[currentMonth]} {currentYear}
        </h2>
        <button className="calendar__nav next" onClick={handleNextMonth}>
          {">"}
        </button>
      </div>

      <div className="calendar__days">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
