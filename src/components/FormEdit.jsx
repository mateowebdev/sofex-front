import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function FormEdit({ empleado, close }) {
  const [user, setUser] = useState({
    user_id: empleado.user_id,
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    cargo: empleado.cargo,
    salario: empleado.salario,
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
      <div className="flex justify-end">
        <button onClick={close}>
          <AiOutlineClose />
        </button>
      </div>
      <h3 className="font-bold text-lg text-center">Editar usuario</h3>
      <div className="w-full">
        <label>User id:</label>
        <div className="flex gap-2">
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="user_id"
            value={user_id}
            className="w-full outline-none p-2 rounded-md cursor-not-allowed"
            disabled={true}
          />
          
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
        className="bg-green-600 text-white p-3 rounded-md mt-3"
      >
        Guardar cambios
      </button>
    </form>
  );
}
