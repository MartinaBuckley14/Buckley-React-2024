import "./contactform.scss"

const ContactForm = () => {
  return (
    <div className="form-conteiner">
        <form className="contact-form-conteiner"> 
            <div className="input-conteiner">
                <label>Nombre completo</label>
                <input type="text" id="nombre" placeholder="Ingrese su nombre"/>
            </div>
            
            <div className="input-conteiner">
                <label>Email</label>
                <input type="email" id="mail" placeholder="Ingrese un mail"/>
            </div>
            
            <div className="input-conteiner">
                <label for="mensaje">Mensaje</label>
                <textarea name="Mensaje" id="mensaje" cols="20" rows="5"></textarea>
            </div>
            

            <button type="submit" className="send">Enviar</button>
        </form>
    </div>
  )
}


export default ContactForm
