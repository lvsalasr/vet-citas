import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listado_pacientes from "./components/Listado_pacientes"
Listado_pacientes
Formulario


const App = () => {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <Listado_pacientes />
      </div>
    </div>
  )
}

export default App