import React, { useState } from "react";

import Header from "../Header/Header";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./Appointment.scss";

function Appointment() {
  const [events] = useState([
    { title: "event 1", date: "2020-09-01" },
    { title: "event 2", date: "2020-09-02" },
  ]);

  return (
    <div>
      <Header />
      <div className="o-appointment-user-container">
        <div className="o-appointment-user-calendar">
          <h3>Mis citas</h3>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
            }}
            editable={true}
            selectable={true}
            height={"40vw"}
            slotMinTime={"07:00"}
            slotMaxTime={"19:00"}
            slotDuration={"00:15"}
            businessHours={{
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "08:00",
              endTime: "18:00",
            }}
            nowIndicator={true}
            locale="es"
            dateClick={(e) => {
              //handle date click
              console.log(e);
              console.log(e.date);
            }}
            eventClick={function (e) {
              // e.jsEvent.preventDefault(); // don't let the browser navigate
              console.log(e);
            }}
          />
        </div>
        <div className='o-appointment-user-record'>
          <h3>Mi historial</h3>
          <div>dato</div>
          <div>dato</div>
          <div>dato</div>
          <div>dato</div>
          <div>dato</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
