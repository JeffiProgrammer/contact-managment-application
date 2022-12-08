import { Link } from "react-router-dom";
import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = ({ loading, changeInputHandler, contact, groups,createContactForm }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "142px",
                right: "100px",
                opacity: "50%",
              }}
              alt="note"
            />
            <div className="conatiner">
              <div className="row">
                <div className="col">
                  <p className="h4 fw-bold text-center" style={{ color: GREEN }}>
                    Create New Contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input type="text" name="fullname" value={contact.fullname} onChange={changeInputHandler} className="form-control" placeholder="Fullname" required={true} />
                    </div>
                    <div className="mb-2">
                      <input type="text" name="photo" value={contact.photo} onChange={changeInputHandler} className="form-control" placeholder="Photo Address" required={true} />
                    </div>
                    <div className="mb-2">
                      <input type="number" name="mobile" value={contact.mobile} onChange={changeInputHandler} className="form-control" placeholder="Mobile Number" required={true} />
                    </div>
                    <div className="mb-2">
                      <input type="email" name="email" value={contact.email} onChange={changeInputHandler} className="form-control" placeholder="Email" required={true} />
                    </div>
                    <div className="mb-2">
                      <input type="text" name="job" value={contact.job} onChange={changeInputHandler} className="form-control" placeholder="JOB" required={true} />
                    </div>
                    <div className="mb-2">
                      <select name="group" value={contact.group} onChange={changeInputHandler} required={true} className="form-control">
                        <option value="">Choose a Group</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input type="submit" className="btn" value="Create Contact" style={{ backgroundColor: PURPLE }} />
                      <Link to="/contacts" className="btn mx-2" style={{ backgroundColor: COMMENT }}>
                        Exit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
