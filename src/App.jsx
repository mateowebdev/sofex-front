import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/empleados")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmpleados(data);
      });

    return () => {};
  }, []);

  const handleCrearEmpleado = (user_id, nombre, apellido, cargo, salario) => {
    const payload = {
      user_id,
      nombre,
      apellido,
      cargo,
      salario,
    };

    const configs = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const url = `http://localhost:5000/empleados`;
    fetch(url, configs)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleBuscarEmpleado = (id) => {
    let result;

    const configs = {
      method: "GET",
    };

    id = id.trim();

    const url = `http://localhost:5000/empleados/${encodeURIComponent(id)}`;
    fetch(url, configs)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        result = data;
      });

    return result;
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Main
        empleados={empleados}
        handleBuscarEmpleado={handleBuscarEmpleado}
        handleCrearEmpleado={handleCrearEmpleado}
      />
    </div>
  );
}

export default App;
