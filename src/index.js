import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import index_service from './services/index.service';
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import H1 from "./components/H1";
import Ul from "./components/Ul";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  const [note, setNote] = useState([]);
  const [showAll, setShowAll] = useState(true);


  const notesToShow = (showAll) ? note : note.filter((note) => note.important === true);

  /* Envio del formulario */
    const onSubmit = (newNote) => {
      const _newNote = {
        content: newNote.Note,
        important: true,
      };
      
      index_service.create(_newNote)
      .then(response => {
        setNote(note.concat(response.data));
      });
    };
  /* -------------------- */
  
  /* Filtro para eventos */
    const handleSetShowAll = () => {
      if (showAll == true) {
        setShowAll(false);
      } else {
        setShowAll(true);
      }
    };
  /* ------------------- */
  
  /* Actualizacion de eventos */
    const toggleImportanceOf = (id) => {

    }
  /* ------------------- */

  useEffect(() => {
    index_service.getAll()
      .then(response => {
        setNote(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Button
              children="Cambiar importancia "
              type="primary"
              onClick={handleSetShowAll}
            />
          </div>
          <div className="col-md-8">
            <H1
              className="text-center my-3"
              children="Notes"
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <Ul
              data={notesToShow}
              onClick={toggleImportanceOf}
            />
          </div>
        </div>

        <hr className="my-4" />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
