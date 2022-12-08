import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COMMENT, CYAN } from "../../helpers/colors";
import { getContact, getGroup } from "../../services/contactService";

const ViewContact = () => {
  const { contactId } = useParams();
  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(contactId);
        const { data: groupData } = await getGroup(contactData.group);
        // setState({ ...state, loading: false });
        console.log(state);
      } catch (error) {
        console.log(error.message);
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row my-2 text-center">
            <p className="h3 fw-bold" style={{ color: CYAN }}>
              Contact Information
            </p>
          </div>
        </div>
      </section>
      <hr style={{ backgroundColor: COMMENT }} />
    </>
  );
};

export default ViewContact;
