import { useState } from "react";
import BuscarStripe from "./BuscarStripe";
import EmpleadosTable from "./EmpleadosTable";
import Form from "./Form";
import FormEdit from "./FormEdit";

export default function Main({
  empleados,
  handleBuscarEmpleado,
  handleCrearEmpleado,
}) {
  const [viewform, setViewform] = useState(false);
  const [viewEditForm, setViewEditForm] = useState(false);
  const [buscado, setBuscado] = useState(null);

  const handleViewForm = () => {
    setViewform(true);
    setViewEditForm(false);
  };

  const handleCloseForm = () => {
    setViewform(false);
  };
  const handleCloseEditForm = () => {
    setViewEditForm(false);
  };

  const handleEditUser = async (empleado) => {
    setViewform(false)
    setViewEditForm(true)
    setBuscado(empleado);
  };

  return (
    <div className="bg-stone-300 flex-grow px-8 py-12 flex gap-4">
      <div id="left" className="w-4/6">
        <BuscarStripe
          handleBuscarEmpleado={handleBuscarEmpleado}
          handleViewForm={handleViewForm}
        />
        <EmpleadosTable empleados={empleados} handleEditUser={handleEditUser} />
      </div>
      <div id="right" className="w-2/6">
        {viewform && <Form close={handleCloseForm} />}
        {viewEditForm && <FormEdit empleado={buscado} close={handleCloseEditForm} />}
      </div>
    </div>
  );
}
