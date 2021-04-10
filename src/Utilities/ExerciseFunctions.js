import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de ejercicios */
export const ExerciseList = (setListExercise) => {
  axios
    .get(`${creds.url}/ejercicio/lista`)
    .then((res) => {
      setListExercise(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Eliminar un ejercicio */
export const DeleteExercise = (ejercicio, setListExercise) => {
  swal({
    title: "Estas seguro?",
    text: `Deseas borrar el ejercicio: ${ejercicio.nombreEjercicio}?`,
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
        .delete(`${creds.url}/ejercicio/id/${ejercicio.idEjercicio}`)
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Ejercicio eliminado",
              text: `Se ha eliminado satisfactoriamente el ejercicio: ${ejercicio.nombreEjercicio}`,
              icon: "success",
            });
            ExerciseList(setListExercise);
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

/* Crear un ejercicio */
export const CreateExercise = (ejercicio, setListExercise) => {
  swal({
    title: "Creando...",
    text: "Estamos creando un nuevo ejercicio",
    icon: "info",
    buttons: false,
  });
  axios
    .post(`${creds.url}/ejercicio/registro`, {
      ejercicio,
    })
    .then(function (res) {
      if (res.data === "success") {
        swal({
          title: "Ejercicio creado",
          text: `Se ha creado satisfactoriamente el ejercicio: ${ejercicio.nombreEjercicio}`,
          icon: "success",
        });
        ExerciseList(setListExercise);
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

/* Editar un ejercicio */
export const EditExercise = (ejercicio, setListExercise) => {
  console.log(ejercicio);
  swal({
    title: "Estas seguro?",
    text: "Deseas editar los datos de este ejercicio?",
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
        .post(`${creds.url}/ejercicio/editar`, {
          ejercicio,
        })
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Ejercicio editado",
              text: "Se ha editado satisfactoriamente el ejercicio",
              icon: "success",
            });
            ExerciseList(setListExercise);
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
