import withNavbar from '../../../shared/hoc/withNavBar';
import ContactTemplate from '../../templates/Contact/index';
import withAppbarFooter from '../../../shared/hoc/withAppbarFooter';

function Contact() {
  return (
    <div>
      <ContactTemplate />
    </div>
  );
}

export default withAppbarFooter(Contact);
