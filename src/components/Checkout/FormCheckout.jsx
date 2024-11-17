import "./checkout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm}>
            <label className="labelGen">Nombre completo</label>
            <input className="inputGen"
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeInput}
            />

            <label className="labelGen">Teléfono</label>
            <input className="inputGen"
                type="number"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
            />

            <label className="labelGen">Email</label>
            <input className="inputGen"
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeInput}
            />

            <button className="buttonSend" type="submit">Enviar mi orden</button>
        </form>
    )
}
export default FormCheckout
