import React, { useState } from "react";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// import Add from "../../Img/Admin/add.svg";

import "./Appointment.scss";

function Appointment() {
  const [events] = useState([
    { title: "event 1", date: "2020-09-01" },
    { title: "event 2", date: "2020-09-02" },
  ]);

  // dateClick: (e) => {
  //   //handle date click
  //   console.log(e)
  //   console.log(e.date)
  // },
  // eventClick: function (e) {
  //   // e.jsEvent.preventDefault(); // don't let the browser navigate
  //   console.log(e)
  // },

  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-appointments-container">
            <div className="o-appointments-content">
              <div className="o-search-appointments">
                <h3>Citas</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-appointments-field">
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
            </div>
            <div className="o-appointment-info">
              {/* <div className="o-info-title">
          <h3>Ejercicio</h3>
        </div>
        <div className="o-routine-field">
          <h4>Nombre</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-routine-field">
          <h4>Descripción</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-routine-field">
          <h4>Link de video</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-button-container">
          <button className="o-button-action">Agregar</button>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
