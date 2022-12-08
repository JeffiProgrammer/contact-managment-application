import { MDBIcon } from "mdb-react-ui-kit";
import { PURPLE } from "../../helpers/colors";

const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75">
      <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: PURPLE }}>
        <MDBIcon fas icon="search" />
      </span>
      <input type="text" className="form-control" placeholder="Search Contact" aria-label="search" aria-describedby="basic-addon1" />
    </div>
  );
};

export default SearchContact;
