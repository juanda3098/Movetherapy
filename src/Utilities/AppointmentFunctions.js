import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de pacientes */
export const AppointmentList = (setListAppointments) => {
  axios
    .get(`${creds.url}/cita/lista`)
    .then((res) => {
      setListAppointments(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Eliminar un paciente */
export const DeleteAppointment = (paciente, setListAppointments) => {
  var name = "";
  if (paciente.nombre1Paciente) {
    name = `${name} ${paciente.nombre1Paciente}`;
  }
  if (paciente.nombre2Paciente) {
    name = `${name} ${paciente.nombre2Paciente}`;
  }
  if (paciente.apellido1Paciente) {
    name = `${name} ${paciente.apellido1Paciente}`;
  }
  if (paciente.apellido2Paciente) {
    name = `${name} ${paciente.apellido2Paciente}`;
  }

  swal({
    title: "Estas seguro?",
    text: `Deseas borrar al paciente: ${name}?`,
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
        .delete(`${creds.url}/paciente/cedula/${paciente.cedulaPaciente}`)
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Paciente eliminado",
              text: `Se ha eliminado satisfactoriamente el paciente: ${name}`,
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

/* Crear un paciente */
export const CreateAppointment = (cita, setListAppointments) => {
  /* var name = "";
  if (paciente.nombre1Paciente) {
    name = `${name} ${paciente.nombre1Paciente}`;
  }
  if (paciente.nombre2Paciente) {
    name = `${name} ${paciente.nombre2Paciente}`;
  }
  if (paciente.apellido1Paciente) {
    name = `${name} ${paciente.apellido1Paciente}`;
  }
  if (paciente.apellido2Paciente) {
    name = `${name} ${paciente.apellido2Paciente}`;
  } */
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

/* Editar un paciente */
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
