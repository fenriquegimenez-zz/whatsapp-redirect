import { useEffect } from "react"
import Form from "../components/form"
import { FaGithub, FaWhatsapp } from "react-icons/fa"

const Index = () => {
  useEffect(() => {
    document.title = "Redirect to Whatsapp"
  }, [])
  return (
    <div className="d-flex flex-column vh-100">
      <div className="my-auto">
        <h1
          className="text-white"
          style={{
            fontFamily: "Helvetica",
          }}
        >
          Directo al chat <FaWhatsapp />
        </h1>
        <Form />
      </div>
      <div className="mx-2 my-2 d-flex align-items-end justify-content-end text-end font-monospace fw-light">
        <small>
          Desarrollado por{" "}
          <a
            className="text-decoration-none"
            href="https://github.com/fenriquegimenez"
          >
            Enrique Giménez
          </a>
          .
          <br />
          <a
            href="https://github.com/fenriquegimenez/whatsapp-redirect"
            className="text-decoration-none"
          >
            Revisá el código{" "}
          </a>
          <FaGithub />
        </small>
      </div>
    </div>
  )
}

export default Index
