import React, { useState } from "react";
import "./calendardays.css";

const Calendardays = () => {
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
    "2024-10-04": [
      { time: "10H30", name: "CONCERTO 1 - CLARINETE" },
      { time: "19H00", name: "CONCERTO 2 - SAXOFONE KIDS E JÚNIOR" },
    ],
    "2024-10-12": [{ time: "9H30", name: "ENCONTRO" }],
    "2024-10-16": [{ time: "19H00", name: "ESPETÁCULO DE ENCERRAMENTO" }],
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

  const renderEvents = () => {
    const eventDays = Object.keys(events)
      .filter((date) => {
        const eventDate = new Date(date);
        return (
          eventDate.getFullYear() === currentYear &&
          eventDate.getMonth() === currentMonth
        );
      })
      .map((date) => {
        const day = new Date(date).getDate();
        const weekday = new Date(date).toLocaleDateString("pt-BR", {
          weekday: "long",
        });

        const dayEvents = events[date];

        return (
          <div key={date} className="event-wrapper">
            <div className="event-header">
              <h4>{day}</h4>
              <span>{weekday.toUpperCase()}</span>
            </div>

            {dayEvents.map((event, index) => (
              <div key={`${date}-${index}`} className="event-card">
                <div className="event-details">
                  <strong>{event.time}&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
                  {event.name}
                </div>
              </div>
            ))}
          </div>
        );
      });

    return eventDays.length > 0 ? eventDays : <p>Sem eventos este mês</p>;
  };

  return (
    <div className="calendardays">
      <div className="calendardays__header">
        <button className="calendardays__nav prev" onClick={handlePrevMonth}>
          {"<"}
        </button>
        <h2>
          {months[currentMonth]} {currentYear}
        </h2>
        <button className="calendardays__nav next" onClick={handleNextMonth}>
          {">"}
        </button>
      </div>

      <div className="calendardays__events-list">{renderEvents()}</div>
    </div>
  );
};

export default Calendardays;
