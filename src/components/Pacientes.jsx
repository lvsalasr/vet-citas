import Listado_pacientes from "./Listado_pacientes"

function Paciente() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de mascotas: {''}
        <span className="font-normal normal-case">Abbychuela</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del dueño: {''}
        <span className="font-normal normal-case">Laura Valentina Salas Ramirez</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">lv_salasr_2019-1@corhuila.edu.co</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">15 de abril del 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">gripa</span>
        </p>
   </div>





  )
   
}
export default Paciente