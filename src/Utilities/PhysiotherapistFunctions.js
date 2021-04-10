import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

/* Listado de pacientes */
export const PhysioList = (setListPhysio) => {
  axios
    .get(`${creds.url}/fisio/lista`)
    .then((res) => {
      setListPhysio(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/* Busca un paciente con una cedula en concreto */
export const SearchPatient = (cedula, setPatientSelected) => {};

/* Eliminar un paciente */
export const DeletePhysio = (fisioterapeuta, setListPhysio) => {
  var name = "";
  if (fisioterapeuta.nombre1Fisio) {
    name = `${name} ${fisioterapeuta.nombre1Fisio}`;
  }
  if (fisioterapeuta.nombre2Fisio) {
    name = `${name} ${fisioterapeuta.nombre2Fisio}`;
  }
  if (fisioterapeuta.apellido1Fisio) {
    name = `${name} ${fisioterapeuta.apellido1Fisio}`;
  }
  if (fisioterapeuta.apellido2Fisio) {
    name = `${name} ${fisioterapeuta.apellido2Fisio}`;
  }
  swal({
    title: "Estas seguro?",
    text: `Deseas borrar al fisioterapeuta: ${name}?`,
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
        .delete(`${creds.url}/fisio/cedula/${fisioterapeuta.cedulaFisio}`)
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Fisioterapeuta eliminado",
              text: `Se ha eliminado satisfactoriamente el fisioterapeuta: ${name}`,
              icon: "success",
            });
            PhysioList(setListPhysio);
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

/* Crear un fisioterapeuta */
export const CreatePhysio = (fisioterapeuta, setListPhysio) => {
  var name = "";
  if (fisioterapeuta.nombre1Fisio) {
    name = `${name} ${fisioterapeuta.nombre1Fisio}`;
  }
  if (fisioterapeuta.nombre2Fisio) {
    name = `${name} ${fisioterapeuta.nombre2Fisio}`;
  }
  if (fisioterapeuta.apellido1Fisio) {
    name = `${name} ${fisioterapeuta.apellido1Fisio}`;
  }
  if (fisioterapeuta.apellido2Fisio) {
    name = `${name} ${fisioterapeuta.apellido2Fisio}`;
  }
  swal({
    title: "Creando...",
    text: "Estamos creando un nuevo fisioterapeuta",
    icon: "info",
    buttons: false,
  });
  axios
    .post(`${creds.url}/fisio/registro`, {
      fisioterapeuta,
    })
    .then(function (res) {
      if (res.data === "success") {
        swal({
          title: "Fisioterapeuta creado",
          text: `Se ha creado satisfactoriamente el fisioterapeuta: ${name}`,
          icon: "success",
        });
        PhysioList(setListPhysio);
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
export const EditPhysio = (fisioterapeuta, setListPhysio) => {
  console.log(fisioterapeuta);
  swal({
    title: "Estas seguro?",
    text: "Deseas editar los datos de este fisioterapeuta?",
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
        .post(`${creds.url}/fisio/editar`, {
          fisioterapeuta,
        })
        .then(function (res) {
          if (res.data === "success") {
            swal({
              title: "Fisioterapeuta editado",
              text: "Se ha editado satisfactoriamente el fisioterapeuta",
              icon: "success",
            });
            PhysioList(setListPhysio);
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
