import { useState } from "react";
import BuscarStripe from "./BuscarStripe";
import EmpleadosTable from "./EmpleadosTable";
import Form from "./Form";

export default function Main({ empleados, handleBuscarEmpleado, handleCrearEmpleado }) {
  const [viewform, setViewform] = useState(false);

  const handleViewForm = ()=>{
    setViewform(true)
  }

  return (
    <div className="bg-stone-300 flex-grow px-8 py-12 flex gap-4">
      <div id="left" className="w-4/6">
        <BuscarStripe handleBuscarEmpleado={handleBuscarEmpleado} handleViewForm={handleViewForm} />
        <EmpleadosTable empleados={empleados} />
      </div>
      <div id="right" className="w-2/6">
        {viewform && <Form empleado={{}}/>}
        {/* {empleados[0] && <Form empleado={empleados[0]} />} */}
      </div>
    </div>
  );
}
