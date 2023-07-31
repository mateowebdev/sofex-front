import React, { useState } from "react";

export default function BuscarStripe({handleBuscarEmpleado, handleViewForm}) {
    const [buscado, setBuscado] = useState("")

    const handleInput = (e)=>{
        setBuscado(e.target.value);
        console.log(buscado);
    }

  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-2">
        <input type="text" className="outline-none p-2 rounded-md"  onChange={(e) => handleInput(e)}
            name="buscado"
            value={buscado}/>
        <button className="p-2 bg-slate-400 rounded-md" onClick={()=>handleBuscarEmpleado(buscado)}>Buscar</button>
      </div>
      <button className="p-2 px-4 bg-blue-400 rounded-md" onClick={handleViewForm}>Crear nuevo</button>
    </div>
  );
}
