import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = ({ contact }) => {
  return (
    <div className="col-md-6">
      <div className="card my-2" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img src={contact.photo} alt={contact.fullname} className="img-fluid rounded" style={{ border: `1px solid ${PURPLE}` }} />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group my-2">
                <li className="list-group-item list-group-item-light">
                  Fullname : <span className="fw-bold">{contact.fullname}</span>
                </li>
                <li className="list-group-item list-group-item-light">
                  Phone Number : <span className="fw-bold">{contact.mobile}</span>
                </li>
                <li className="list-group-item list-group-item-light">
                  Email Address : <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <Link to={`/contacts/${contact.id}`} className="btn p-2 m-1" style={{ backgroundColor: ORANGE }}>
                <MDBIcon icon="eye" />
              </Link>
              <button className="btn p-2 m-1" style={{ backgroundColor: CYAN }}>
                <MDBIcon fas icon="pen" />
              </button>
              <button className="btn p-2 m-1" style={{ backgroundColor: RED }}>
                <MDBIcon fas icon="trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
