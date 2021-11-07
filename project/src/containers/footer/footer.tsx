import Logo from '../../components/logo/logo';
import {LOGO_PROPERTY} from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo place={LOGO_PROPERTY.footer}/>
    </footer>
  );
}

export default Footer;
