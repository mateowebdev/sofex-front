import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Form({ close }) {
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
  };

  const handleAleatorio = () => {
    const aleatorio = generarStringAleatorio();
    setUser({
      ...user,
      user_id: aleatorio,
    });
  };

  return (
    <form className="text-sm flex flex-col gap-2 p-4 bg-slate-400 rounded-md">
      <div className="flex justify-end">
        <button onClick={close}>
          <AiOutlineClose />
        </button>
      </div>
      <h3 className="font-bold text-lg text-center">Crear usuario</h3>
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
            onClick={handleAleatorio}
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
        className="bg-green-600 text-white p-3 rounded-md mt-3"
      >
        Cargar nuevo
      </button>
    </form>
  );
}

function generarStringAleatorio() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  let resultado = "";

  // Generar 4 letras aleatorias
  for (let i = 0; i < 4; i++) {
    resultado += getRandomItem(letras);
  }

  // Generar 4 números aleatorios
  for (let i = 0; i < 4; i++) {
    resultado += getRandomItem(numeros);
  }

  // Generar 4 símbolos aleatorios
  for (let i = 0; i < 4; i++) {
    resultado += getRandomItem(simbolos);
  }

  // Mezclar el string aleatorio para que no esté en un orden predecible
  resultado = resultado
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return resultado;
}
