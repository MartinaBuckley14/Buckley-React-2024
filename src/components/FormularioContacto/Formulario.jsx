import "./formulario.scss";
const Formulario = () => {
  return (
    <div className="formulario-conteiner">
        <input type="text" placeholder="Nombre y Apellido"></input>
        <input type="email" placeholder="Mail"></input>
        <input type="tel" placeholder="Telefono"></input>
        <textarea placeholder="Dejanos tu comentario"></textarea>
        <button type="submit" className="boton-formulario">Enviar</button>
    </div>
  )
}

export default Formulario
