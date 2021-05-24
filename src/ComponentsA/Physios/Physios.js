import React, { useState, useEffect } from "react";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Physio from "../Physio/Physio";

import {
  PhysioList,
  CreatePhysio,
  EditPhysio,
} from "../../Utilities/PhysiotherapistFunctions";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Physios.scss";

function Physios() {
  const [showModal, setShowModal] = useState(false);
  const [listPhysio, setListPhysio] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [actionPhysio, setActionPhysio] = useState([]);

  useEffect(() => {
    PhysioList(setListPhysio);
  }, []);

  const functionAction = (e) => {
    console.log(actionPhysio);
    if (isEdit) {
      EditPhysio(actionPhysio, setListPhysio);
    } else {
      CreatePhysio(actionPhysio, setListPhysio);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  let handleField = (event) => {
        setActionPhysio({
      ...actionPhysio,
      [event.target.id]: event.target.value,
        });
    console.log(actionPhysio);
  };

  const handleEdit = (physio) => {
    setActionPhysio(physio);
    setIsEdit(true);
    setShowModal(true);
  };

  const openModalCreate = () => {
    clearForm();
    setIsEdit(false);
    setShowModal(true);
  };

  function clearForm() {
    setActionPhysio([]);
  }

  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-routines-container">
            <div className="o-routines-content">
              <div className="o-search-routines">
                <h3>Lista de fisioterapeutas</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-routines-field">
                <div className="o-routine-label">
                  <h4 style={{ width: "22vw" }}>Nombre</h4>
                  <h4 style={{ width: "12vw" }}>Celular</h4>
                  <h4 style={{ width: "20vw" }}>Correo</h4>
                  <h4 style={{ width: "20vw" }}>Titulo</h4>
                  <h4 style={{ width: "5vw" }}>Acciones</h4>
                </div>
                <div className="o-routines-list">
                  {Object.values(listPhysio).map((physio, index) => {
                    return (
                      <Physio
                        key={index}
                        physio={physio}
                        handleEditEvent={handleEdit}
                        setListPhysio={setListPhysio}
                      />
                    );
                  })}
                </div>
                <div className="o-add-container">
                  <Fab
                    onClick={openModalCreate}
                    color="primary"
                    aria-label="add"
                    style={{ fontSize: "4rem" }}
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </div>
            </div>
            {showModal ? (
              <div className="o-exercises-modal">
                <form className="o-physio-info" onSubmit={functionAction}>
                  <div className="o-info-title">
                    <h3>Fisioterapeuta</h3>
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Primer nombre"
                      id="nombre1Fisio"
                      defaultValue={actionPhysio.nombre1Fisio}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      label="Segundo nombre"
                      id="nombre2Fisio"
                      defaultValue={actionPhysio.nombre2Fisio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Primer apellido"
                      id="apellido1Fisio"
                      defaultValue={actionPhysio.apellido1Fisio}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      label="Segundo apellido"
                      id="apellido2Fisio"
                      defaultValue={actionPhysio.apellido2Fisio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Cédula"
                      id="cedulaFisio"
                      defaultValue={actionPhysio.cedulaFisio}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Celular"
                      id="celularFisio"
                      defaultValue={actionPhysio.celularFisio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Correo electrónico"
                      id="correoFisio"
                      defaultValue={actionPhysio.correoFisio}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Titulo"
                      id="tituloFisio"
                      defaultValue={actionPhysio.tituloFisio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row-physio">
                    <div className="o-button-container-physio">
                      <Button
                        variant="contained"
                        onClick={() => setShowModal(false)}
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

export default Physios;
