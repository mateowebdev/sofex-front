import sofexLogo from "../assets/s-logo.png";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen p-10 bg-slate-800 text-white flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <img width={100} src={sofexLogo} alt="Sofex logo" />
        <p className="text-slate-400 font-light text-sm text-center">
          Dashboard registro de entradas.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <button className="w-full bg-slate-500 p-4 rounded-lg">
          Empleados
        </button>
      </div>
    </div>
  );
}
