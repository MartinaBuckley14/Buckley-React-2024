
const FormCheckout = ({dataForm, handleChangeForm, handleSubmitForm}) => {
  return (
    <div>
      <form onSubmit={handleSubmitForm}> 
            <label>Nombre completo</label>
            <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeForm} />

            <label>Telefono</label>
            <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeForm}/>

            <label>Email</label>
            <input type="email" value={dataForm.email} name="email" onChange={handleChangeForm}/>

            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default FormCheckout
