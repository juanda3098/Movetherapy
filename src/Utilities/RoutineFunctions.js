import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de rutinas */
export const RoutineList = (setListPatients) => {
  axios
    .get(`${creds.url}/rutina/lista`)
    .then((res) => {
      setListPatients(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Eliminar una rutina */
export const DeleteRoutine = (rutina, setListRoutines) => {
  swal({
    title: "Estas seguro?",
    text: `Deseas borrar la rutina: ${rutina.nombreRutina}?`,
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
        .delete(`${creds.url}/rutina/id/${rutina.idRutina}`)
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Rutina eliminada",
              text: `Se ha eliminado satisfactoriamente el paciente: ${rutina.nombreRutina}`,
              icon: "success",
            });
            RoutineList(setListRoutines);
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

/* Crear una rutina */
export const CreateRoutine = (rutina, setListRoutines) => {
  swal({
    title: "Creando...",
    text: "Estamos creando una nueva rutina",
    icon: "info",
    buttons: false,
  });
  axios
    .post(`${creds.url}/rutina/registro`, {
      rutina,
    })
    .then(function (res) {
      if (res.data === "success") {
        swal({
          title: "Rutina creada",
          text: `Se ha creado satisfactoriamente la rutina: ${rutina.nombreRutina}`,
          icon: "success",
        });
        RoutineList(setListRoutines);
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

/* Editar una rutina */
export const EditRoutine = (rutina, setListRoutines) => {
  swal({
    title: "Estas seguro?",
    text: "Deseas editar los datos de esta rutina?",
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
        .post(`${creds.url}/rutina/editar`, {
          rutina,
        })
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Rutina editada",
              text: "Se ha editado satisfactoriamente la rutina",
              icon: "success",
            });
            RoutineList(setListRoutines);
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
