import CerrarBtn from "../img/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = ()=>{
    
    setAnimarModal(false)

    setTimeout(()=>{
      setModal(false)
    }, 500)
  }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarBtn}
                alt="Cerrar Modal"
                onClick={ocultarModal}
            />
        </div>

        <form action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>

                <input 
                  id="nombre"
                  type="text"
                  placeholder="Añade el Nombre del Gasto" 
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                  id="cantidad"
                  type="number"
                  placeholder="Añade la cantidad del gasto: ej.300" 
                />
            </div>
        </form>
    </div>
  )
}

export default Modal