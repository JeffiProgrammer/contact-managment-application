import { MDBIcon } from "mdb-react-ui-kit";
import { BACKGROUND, PURPLE } from "../helpers/colors";
import SearchContact from "./contacts/SearchContact";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ backgroundColor: BACKGROUND }}>
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <MDBIcon fas icon="id-badge" style={{ color: PURPLE }} />
              <span className="mx-1" style={{ color: PURPLE }}>Contact</span>{" "} Management Web Application
            </div>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
