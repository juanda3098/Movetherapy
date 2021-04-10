import React, { useState, useEffect } from "react";

import { PatientList } from "../../Utilities/PatientFunctions";

import {
  AppointmentList,
  EditAppointment,
  CreateAppointment,
} from "../../Utilities/AppointmentFunctions";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";

import TextField from "@material-ui/core/TextField";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import "./Appointment.scss";

function Appointment() {
  const [listPatients, setListPatients] = useState([]);
  const [listAppointments, setListAppointments] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState();
  const [actionAppointment, setActionAppointment] = useState([]);

  const [events] = useState([
    { title: "event 1", start: "2021-04-01T08:30"},
    { title: "event 2", date: "2021-04-02" },
  ]);

  const handlePatientSelected = (cadena) => {
    if (cadena) {
      var cedula = cadena.split(",", 1);
      setActionAppointment({
        ...actionAppointment,
        fkCedula: cedula,
      });
    }
  };

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
    setActionAppointment({
      ...actionAppointment,
      horaCita: e.target.value,
    });
  };

  const handleCreate = (e) => {
    setActionAppointment({
      ...actionAppointment,
      fechaCita: e.dateStr,
    });
    setShowModal(true)
  }

  const functionAction = (e) => {
    console.log(actionAppointment);
    if (isEdit) {
      EditAppointment(actionAppointment, setListAppointments);
    } else {
      console.log('creacion');
      CreateAppointment(actionAppointment, setListAppointments);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  function clearForm() {
    setActionAppointment([]);
  }
  const handleField = (e) => {
    setActionAppointment({
      ...actionAppointment,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    PatientList(setListPatients);
    AppointmentList(setListAppointments);
  }, []);

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
                  events={actionAppointment}
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
                  dateClick={handleCreate}
                  eventClick={function (e) {
                    // e.jsEvent.preventDefault(); // don't let the browser navigate
                    setShowModal(true);
                    console.log("evento", e);
                  }}
                />
              </div>
            </div>
            {showModal ? (
              <div className="o-appointment-modal">
                <form onSubmit={functionAction} className="o-appointment-info">
                  <div className="o-info-title">
                    <h3>Cita</h3>
                  </div>
                  <div className="o-row">
                    <Autocomplete
                      id="combo-box-demo"
                      options={listPatients}
                      getOptionLabel={(paciente) =>
                        `${paciente.cedulaPaciente}, ${paciente.nombre1Paciente} ${paciente.nombre2Paciente} ${paciente.apellido1Paciente} ${paciente.apellido2Paciente}`
                      }
                      onChange={(e) =>
                        handlePatientSelected(e.target.outerText)
                      }
                      style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          margin="normal"
                          label="Selecciona un paciente"
                          variant="outlined"
                          size="small"
                          style={{ width: "25rem" }}
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      required
                      variant="outlined"
                      margin="normal"
                      size="small"
                      id="time"
                      label="Hora de la cita"
                      type="time"
                      onChange={handleHourChange}
                      defaultValue=""
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={
                        {
                          //step: 1800, // 5 min
                        }
                      }
                    />
                  </div>
                  <div className="o-row-appointment">
                    <TextField
                      margin="normal"
                      size="small"
                      id="observacionCita"
                      label="Descripcion de la cita"
                      multiline
                      onChange={(e) => handleField(e)}
                      rows={6}
                      defaultValue=""
                      variant="outlined"
                      style={{ width: "25rem" }}
                    />
                  </div>
                  <div className="o-row">
                    <div className="o-button-container">
                      <Button
                        variant="contained"
                        onClick={() => setShowModal(false)}
                        style={{ marginRight: "1rem" }}
                        color="secondary"
                      >
                        Cerrar
                      </Button>
                      {isEdit ? (
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                        >
                          Editar
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                        >
                          Crear
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
