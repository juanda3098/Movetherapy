import React, { useState, useEffect, useContext } from "react";

import LoginContext from "../../Context/LoginContext";

import {
  AppointmentListUser,
  RoutineAppointmentList,
} from "../../Utilities/AppointmentFunctions";

import Header from "../Header/Header";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./Appointment.scss";

function Appointment() {
  const { user } = useContext(LoginContext);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [listAppointments, setListAppointments] = useState([]);
  const [listRoutineAppointment, setListRoutineAppointment] = useState([]);
  const [actionAppointment, setActionAppointment] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AppointmentListUser(user.cedula, setListAppointments);
  }, [user.cedula]);

  const showAppointment = ({ event }) => {
    RoutineAppointmentList(
      event._def.extendedProps.idCita,
      setListRoutineAppointment
    );
    setActionAppointment(event._def.extendedProps);
    setShowModal(true);
    console.log(showModal);
  };

  return (
    <div>
      <Header />
      <div className="o-appointment-user-container">
        <div className="o-appointment-user-calendar">
          <h3>Mis citas</h3>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={listAppointments}
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
            eventClick={showAppointment}
          />
        </div>
        <div className="o-appointment-user-record">
          <h3>Mi historial</h3>
          {Object.values(listAppointments).map((cita, index) => {
            return <h4>{`Fecha: ${cita.fechaCita}, Hora: ${cita.horaCita}`}</h4>;
          })}
        </div>
      </div>
      {showModal ? (
        <div className="o-appointment-modal">
          <div className="o-appointment-info">
            <div className="o-info-title">
              <h3>Cita</h3>
            </div>
            <div className="o-row">
              {/* <Autocomplete
                id="combo-box-demo"
                options={listPatients}
                getOptionLabel={(paciente) =>
                  `${paciente.cedulaPaciente}, ${paciente.nombre1Paciente} ${paciente.nombre2Paciente} ${paciente.apellido1Paciente} ${paciente.apellido2Paciente}`
                }
                inputValue={
                  actionAppointment?.idCita &&
                  `${actionAppointment.cedulaPaciente}, ${actionAppointment.nombre1Paciente} ${actionAppointment.nombre2Paciente} ${actionAppointment.apellido1Paciente} ${actionAppointment.apellido2Paciente}`
                }
                onChange={(e) => handlePatientSelected(e.target.outerText)}
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
              /> */}
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
                defaultValue={actionAppointment.horaCita}
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
                rows={6}
                defaultValue={actionAppointment.observacionCita}
                variant="outlined"
                style={{ width: "25rem" }}
              />
            </div>
            <div className="o-row">
              {console.log(listRoutineAppointment)}
              <Autocomplete
                multiple
                id="listaRutinas"
                options={listRoutineAppointment}
                disableCloseOnSelect
                getOptionLabel={(option) => option.nombreRutina}
                defaultValue={listRoutineAppointment}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.nombreRutina}
                  </React.Fragment>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin="normal"
                    variant="outlined"
                    label="Rutinas"
                    placeholder="Selecciona las rutinas"
                  />
                )}
              />
            </div>
            <div className="o-row">
              <div className="o-button-container">
                <Button
                  variant="contained"
                  onClick={(e) => setShowModal(false)}
                  style={{ marginRight: "1rem" }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Appointment;
