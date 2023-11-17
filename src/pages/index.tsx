import { FaGithub, FaWhatsapp } from 'react-icons/fa';

import WaForm from '../components/form';
import { DATA } from '../data';

const IndexPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="my-auto">
        <h1
          className="text-white"
          style={{
            fontFamily: 'Helvetica',
          }}
        >
          Ir al chat <FaWhatsapp />
        </h1>
        <WaForm />
      </div>
      <div className="mx-2 my-2 d-flex align-items-end justify-content-end text-end font-monospace fw-light">
        <small>
          Desarrollado por{' '}
          <a className="text-decoration-none" href={DATA.GITHUB_PROFILE}>
            Enrique Giménez
          </a>
          .
          <br />
          <a href={DATA.GITHUB_REPO} className="text-decoration-none">
            Revisá el código{' '}
          </a>
          <FaGithub />
        </small>
      </div>
    </div>
  );
};

export default IndexPage;
