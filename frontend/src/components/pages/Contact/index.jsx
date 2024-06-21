import withNavbar from "../../../shared/hoc/withNavBar";
import ContactTemplate from "../../templates/Contact/index";

function Contact() {
  return (
    <div>
      <ContactTemplate />
    </div>
  );
}

export default withNavbar(Contact);
