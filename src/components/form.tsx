import { useState, useEffect, useRef, FormEvent } from "react"
import WAlogo from "../images/whatsapp-icon.svg"

const Form = () => {
  const [phone, setPhone] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function redirect(event: FormEvent) {
    event.preventDefault()
    window.location.href = `https://wa.me/+595${phone.replace("+595", "")}`
  }

  return (
    <form
      className="container"
      style={{
        maxWidth: "600px",
      }}
    >
      <div className="input-group my-2">
        <input
          type="number"
          onChange={e => setPhone(e.target.value)}
          placeholder="Ingrese su número de teléfono"
          className="form-control"
          ref={inputRef}
        />
      </div>
      <button onClick={e => redirect(e)} className="btn btn-success mt-3">
        WA
      </button>
    </form>
  )
}

export default Form
