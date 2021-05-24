import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de citas */
export const AppointmentList = (setListAppointments) => {
  axios
    .get(`${creds.url}/cita/lista`)
    .then((res) => {
      console.log(res.data);
      setListAppointments(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Listado de citas de un usuario */
export const AppointmentListUser = (cedula, setListAppointments) => {
  axios
    .post(`${creds.url}/cita/lista`, {
      cedula
    })
    .then((res) => {
      console.log(res.data);
      setListAppointments(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Listado de rutinas de una cita */
export const RoutineAppointmentList = (cita, setListExerciseRoutine) => {
  axios
    .post(`${creds.url}/cita/rutina`, {
      cita,
    })
    .then((res) => {
      setListExerciseRoutine(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Eliminar un cita */
export const DeleteAppointment = (cita, setListAppointments, closeModal, e) => {
  var name = "";
  if (cita.nombre1Paciente) {
    name = `${name} ${cita.nombre1Paciente}`;
  }
  if (cita.nombre2Paciente) {
    name = `${name} ${cita.nombre2Paciente}`;
  }
  if (cita.apellido1Paciente) {
    name = `${name} ${cita.apellido1Paciente}`;
  }
  if (cita.apellido2Paciente) {
    name = `${name} ${cita.apellido2Paciente}`;
  }

  swal({
    title: "Estas seguro?",
    text: `Deseas borrar la cita del paciente: ${name}?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal({
        title: "Procesando...",
        text: "Se está procesando tu solicitud",
        icon: "info",
      });
      closeModal();
      axios
        .delete(`${creds.url}/cita/id/${cita.idCita}`)
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Cita eliminada",
              text: `Se ha eliminado satisfactoriamente la cita del paciente: ${name}`,
              icon: "success",
            });
            AppointmentList(setListAppointments);
          }
          if (res.data === "failed") {
            swal({
              title: "Lo sentimos",
              text: "Ah ocurrido un error inesperado",
              icon: "error",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      swal.close();
    }
  });
};

/* Crear un cita */
export const CreateAppointment = (cita, setListAppointments) => {
  swal({
    title: "Creando...",
    text: "Estamos creando una nueva cita",
    icon: "info",
    buttons: false,
  });
  axios
    .post(`${creds.url}/cita/registro`, {
      cita,
    })
    .then(function (res) {
      if (res.data === "success") {
        swal({
          title: "Cita creada",
          text: `Se ha creado satisfactoriamente la cita`,
          icon: "success",
        });
        AppointmentList(setListAppointments);
      }
      if (res.data === "failed") {
        swal({
          title: "Lo sentimos",
          text: "Ah ocurrido un error inesperado",
          icon: "error",
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Editar una cita */
export const EditAppointment = (actionAppointment, setListAppointments) => {
  swal({
    title: "Estas seguro?",
    text: "Deseas editar los datos de este paciente?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal({
        title: "Procesando...",
        text: "Se está procesando tu solicitud",
        icon: "info",
      });
      axios
        .post(`${creds.url}/paciente/editar`, {
          actionAppointment,
        })
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Paciente editado",
              text: "Se ha editado satisfactoriamente el paciente",
              icon: "success",
            });
            AppointmentList(setListAppointments);
          }
          if (res.data === "failed") {
            swal({
              title: "Lo sentimos",
              text: "Ah ocurrido un error inesperado",
              icon: "error",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      swal.close();
    }
  });
};
