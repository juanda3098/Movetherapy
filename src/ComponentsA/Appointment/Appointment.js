import React, { useState, useEffect } from "react";

import { PatientList } from "../../Utilities/PatientFunctions";
import { RoutineList } from "../../Utilities/RoutineFunctions";

import {
  AppointmentList,
  EditAppointment,
  CreateAppointment,
  DeleteAppointment,
  RoutineAppointmentList,
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
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./Appointment.scss";

function Appointment() {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [listPatients, setListPatients] = useState([]);
  const [listAppointments, setListAppointments] = useState([]);
  const [listRoutines, setListRoutines] = useState([]);
  const [listRoutineAppointment, setListRoutineAppointment] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionAppointment, setActionAppointment] = useState([]);

  const handlePatientSelected = (cadena, algo) => {
    if (cadena) {
      var cedula = cadena.split(",", 1);
      setActionAppointment({
        ...actionAppointment,
        fkCedula: cedula,
      });
    }
  };

  const handleHourChange = (e) => {
    setActionAppointment({
      ...actionAppointment,
      horaCita: e.target.value,
    });
  };

  const handleRoutineSelected = (list) => {
    setActionAppointment({ ...actionAppointment, listaRutinas: list });
  };

  const handleCreate = (e) => {
    setActionAppointment({
      ...actionAppointment,
      fechaCita: e.dateStr,
    });
    setIsEdit(false);
    setShowModal(true);
  };

  const functionAction = (e) => {
    console.log(actionAppointment);
    if (isEdit) {
      EditAppointment(actionAppointment, setListAppointments);
    } else {
      CreateAppointment(actionAppointment, setListAppointments);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  const closeModal = () => {
    clearForm();
    setShowModal(false);
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

  const showAppointment = ({ event }) => {
    RoutineAppointmentList(
      event._def.extendedProps.idCita,
      setListRoutineAppointment
    );
    setActionAppointment(event._def.extendedProps);
    setIsEdit(true);
    setShowModal(true);
  };

  useEffect(() => {
    PatientList(setListPatients);
    AppointmentList(setListAppointments);
    RoutineList(setListRoutines);
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
                  dateClick={handleCreate}
                  eventClick={showAppointment}
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
                      inputValue={
                        actionAppointment?.idCita &&
                        `${actionAppointment.cedulaPaciente}, ${actionAppointment.nombre1Paciente} ${actionAppointment.nombre2Paciente} ${actionAppointment.apellido1Paciente} ${actionAppointment.apellido2Paciente}`
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
                      onChange={(e) => handleField(e)}
                      rows={6}
                      defaultValue={actionAppointment.observacionCita}
                      variant="outlined"
                      style={{ width: "25rem" }}
                    />
                  </div>
                  <div className="o-row">
                    {console.log(listRoutineAppointment)}
                    {console.log(isEdit)}
                    <Autocomplete
                      multiple
                      id="listaRutinas"
                      options={listRoutines}
                      onChange={(event, value) => handleRoutineSelected(value)}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.nombreRutina}
                      defaultValue={isEdit ? listRoutineAppointment : []}
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
                      {isEdit ? (
                        <Button
                          variant="contained"
                          onClick={(e) =>
                            DeleteAppointment(
                              actionAppointment,
                              setListAppointments,
                              closeModal,
                              e
                            )
                          }
                          style={{ marginRight: "15rem" }}
                          color="secondary"
                        >
                          Borrar
                        </Button>
                      ) : null}
                      <Button
                        variant="contained"
                        onClick={closeModal}
                        style={{ marginRight: "1rem" }}
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
