import { useState } from "react";
import { FaMagic } from "react-icons/fa";

export default function Form({ empleado }) {

  /* const [user, setUser] = useState({
    user_id: empleado.user_id,
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    cargo: empleado.cargo,
    salario: empleado.salario,
  }); */
  const [user, setUser] = useState({
    user_id: "",
    nombre: "",
    apellido: "",
    cargo: "",
    salario: 0,
  });

  const { user_id, nombre, apellido, cargo, salario } = user;

  const handleInput = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;

    setUser({
      ...user,
      [campo]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Any fool can use a computer");
  };

  return (
    <form className="text-sm flex flex-col gap-2 p-4 bg-slate-400 rounded-md">
      <div className="w-full">
        <label>User id:</label>
        <div className="flex gap-2">
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="user_id"
            value={user_id}
            className="w-full outline-none p-2 rounded-md"
          />
          <button
            type="button"
            className="p-2 bg-amber-300 rounded-md"
            title="Generar automáticamente"
          >
            <FaMagic />
          </button>
        </div>
      </div>
      <div className="w-full">
        <label>Nombre:</label>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          name="nombre"
          value={nombre}
          className="w-full outline-none p-2 rounded-md"
        />
      </div>
      <div className="w-full">
        <label>Apellido:</label>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          name="apellido"
          value={apellido}
          className="w-full outline-none p-2 rounded-md"
        />
      </div>
      <div className="w-full">
        <label>Cargo:</label>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          name="cargo"
          value={cargo}
          className="w-full outline-none p-2 rounded-md"
        />
      </div>
      <div className="w-full">
        <label>Salario (p/hora):</label>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          name="salario"
          value={salario}
          className="w-full outline-none p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="bg-green-300 p-3 rounded-md mt-3"
      >
        Cargar nuevo
      </button>
    </form>
  );
}
