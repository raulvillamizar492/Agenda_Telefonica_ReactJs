import React from "react";
import Alert from "./Alert";
import shortid from "shortid";

const Formulario = () => {
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [contacto, setContacto] = React.useState("");
  const [edad, setEdad] = React.useState("");

  const [datos, setDatos] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      console.log("Debes de ingresar un Nombre Valido");
      return;
    }
    if (!correo.trim()) {
      console.log("Debes de ingresar un Correo Electronico Valido");
      return;
    }
    if (!contacto.trim()) {
      console.log("Debes de ingresar un numero Valido");
      return;
    }
    if (!edad.trim()) {
      console.log("Debes de ingresar una Edad Valida");
      return;
    }
    setDatos([
      ...datos,
      {
        id: shortid.generate(),
        Nombre: nombre,
        Correo: correo,
        Telefono: contacto,
        Edad: edad
      }
    ]);
    console.log("Datos Enviados");

    e.target.reset();
    setNombre("");
    setCorreo("");
    setEdad("");
  };

  const eliminarContacto = (id) => {
    //console.log(id);
    const arrayFiltrado = datos.filter((item) => item.id !== id);
    setDatos(arrayFiltrado);
  };

  return (
    <>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingresa Nombre Completo."
          className="form-control mb-2 "
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Ingresa Correo Electronico."
          className="form-control mb-2 "
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Ingresa Numero de Contacto."
          className="form-control mb-2 "
          onChange={(e) => setContacto(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ingresa Edad."
          className="form-control mb-2 "
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Guardar
        </button>
      </form>
      <br />
      <ul>
        {datos.map((item) => (
          <li className="card-block card " key={item.id}>
            <h1 className="lead  card-header" id="tituloCard">
              {item.Nombre} {item.Apellido}
            </h1>
            <div className="card-body">
              <p>
                <strong>Correo:</strong> {item.Correo}
              </p>
              <p>
                <strong>Telefono:</strong> {item.Telefono}
              </p>
              <p>
                <strong>Edad:</strong> {item.Edad}
              </p>

              <button
                className="btn btn-danger text-center m-1"
                onClick={() => eliminarContacto(item.id)}
              >
                Eliminar
              </button>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Formulario;
