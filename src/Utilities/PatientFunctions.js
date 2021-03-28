import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de pacientes */
export const PatientList = (setListPatients) => {
  axios
    .get(`${creds.url}/paciente/lista`)
    .then((res) => {
      setListPatients(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Eliminar un paciente */
export const DeletePatient = (paciente, setListPatients) => {
  swal({
    title: "Estas seguro?",
    text: `Deseas borrar al paciente: ${paciente.nombre1Paciente} ${paciente.nombre2Paciente} ${paciente.apellido1Paciente} ${paciente.apellido2Paciente}?`,
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
              text: `Se ha eliminado satisfactoriamente el paciente: ${paciente.nombre1Paciente} ${paciente.nombre2Paciente} ${paciente.apellido1Paciente} ${paciente.apellido2Paciente}`,
              icon: "success",
            });
            PatientList(setListPatients);
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
export const CreatePatient = (paciente, setListPatients) => {
  swal({
    title: "Creando...",
    text: "Estamos creando un nuevo paciente",
    icon: "info",
    buttons: false,
  });
  axios
    .post(`${creds.url}/paciente/registro`, {
      paciente,
    })
    .then(function (res) {
      if (res.data === "success") {
        swal({
          title: "Paciente creado",
          text: `Se ha creado satisfactoriamente el paciente: ${paciente.nombre1Paciente} ${paciente.nombre2Paciente} ${paciente.apellido1Paciente} ${paciente.apellido2Paciente}`,
          icon: "success",
        });
        PatientList(setListPatients);
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
export const EditPatient = (actionPatient, setListPatients) => {
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
          actionPatient,
        })
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Paciente editado",
              text: "Se ha editado satisfactoriamente el paciente",
              icon: "success",
            });
            PatientList(setListPatients);
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
