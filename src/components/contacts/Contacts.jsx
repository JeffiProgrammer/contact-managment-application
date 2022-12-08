import { MDBIcon } from "mdb-react-ui-kit";
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
import {Spinner,Contact}from '../'
import { Link } from "react-router-dom";

const Contacts = ({ contacts, loading }) => {
  return (
    <>
      <section className="container">
        <div className="d-grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <Link to="/contacts/add" className="btn mx-2" style={{ backgroundColor: PINK }}>
                  {" "}
                  Create New Contact <MDBIcon fas icon="plus-circle" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
            ) : (
              <div className="text-center py-5" style={{ backgroundColor: CURRENTLINE }}>
                <p className="h3" style={{ color: ORANGE }}>
                  No Contact Found !
                </p>
                <img src={require("../../assets/no-found.gif")} alt="not found" className="w-25 my-2" />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
