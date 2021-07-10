import { useState, useEffect, useRef, FormEvent } from "react"
import { FaWhatsapp } from "react-icons/fa"

const Form = () => {
  const [phone, setPhone] = useState("")
  const [text, setText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function redirect(event: FormEvent) {
    event.preventDefault()
    window.location.href = `https://wa.me/+595${phone.replace(
      "+595",
      ""
    )}?text=${text}`
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
          style={{
            backgroundColor: "rgba(220,248,198,1)",
          }}
        />
      </div>
      <div className="input-group my-2">
        <textarea
          className="form-control"
          placeholder="Podés agregar un mensaje personalizado"
          value={text}
          onChange={e => setText(e.target.value)}
          style={{
            backgroundColor: "rgba(220,248,198,1)",
          }}
        ></textarea>
      </div>
      <button
        onClick={e => redirect(e)}
        className="btn btn-large btn-success mt-3"
      >
        Ir al whatsapp <FaWhatsapp />
      </button>
    </form>
  )
}

export default Form
