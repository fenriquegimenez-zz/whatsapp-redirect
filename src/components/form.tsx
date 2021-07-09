import { useState, FormEvent } from "react"

const Form = () => {
  const [phone, setPhone] = useState("")

  function redirect(event: FormEvent) {
    event.preventDefault()
    window.location.href = `https://wa.me/+595${phone.replace("+595", "")}`
  }

  return (
    <form className="input-group">
      <input
        type="text"
        onChange={e => setPhone(e.target.value)}
        placeholder="Ingrese su número de teléfono"
      />
      <button onClick={e => redirect(e)}>Escribir</button>
    </form>
  )
}

export default Form
