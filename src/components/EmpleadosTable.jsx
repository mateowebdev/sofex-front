export default function EmpleadosTable({ empleados, handleEditUser }) {
  return (
    <div className="">
      <table className="bg-white min-w-full text-left text-sm font-regular rounded-md overflow-hidden">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="pl-2 py-2">
              ID
            </th>
            <th scope="col" className="pl-2 py-2">
              Nombre
            </th>
            <th scope="col" className="pl-2 py-2">
              Apellido
            </th>
            <th scope="col" className="pl-2 py-2">
              Rol
            </th>
            <th scope="col" className="pl-2 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <Fila key={empleado.id} empleado={empleado} handleEditUser={handleEditUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import { GrEdit, GrTrash } from "react-icons/gr";

function Fila({ empleado, handleEditUser }) {
  const [eliminado, setEliminado] = useState(false);

  const { user_id, nombre, apellido, cargo } = empleado;

  const handleDelete = (id) => {
    function deleteEmpleado() {
      const configs = {
        method: "DELETE",
      };

      const url = `http://localhost:5000/empleados/${encodeURIComponent(id)}`;
      fetch(url, configs)
        .then((res) => res.json())
        .then((data) => {
          data == 1 ? setEliminado(true) : console.log(data);
        });
    }

    Swal.fire({
        title: '¿Seguro desea eliminar el registro',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(deleteEmpleado())
        } else if (result.isDenied) {
          
        }
      })
  };

  return (
    <>
      {!eliminado && (
        <tr className="odd:bg-slate-100 even:bg-white">
          <td className="whitespace-nowrap pl-2 py-2 font-medium">{user_id}</td>
          <td className="whitespace-nowrap pl-2 py-2">{nombre}</td>
          <td className="whitespace-nowrap pl-2 py-2">{apellido}</td>
          <td className="whitespace-nowrap pl-2 py-2">{cargo}</td>
          <td className="whitespace-nowrap pl-2 py-2 flex gap-3">
            <button className="bg-slate-200 p-2 rounded-md" title="Editar">
              <GrEdit onClick={()=>{handleEditUser(empleado)}}/>
            </button>
            <button className="bg-red-200 p-2 rounded-md" title="Borrar">
              <GrTrash onClick={() => handleDelete(user_id)} />
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
