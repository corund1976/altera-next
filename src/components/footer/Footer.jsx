import Container from '@/components/container';

import Nav from './nav';
import Contacts from './contacts';

import s from './footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <Nav />

        <Contacts />

        <div className={s.policy}>
          <a
            href="ПОЛИТИКА_В_ОТНОШЕНИИ_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </a>
        </div>

        <div className={s.copyright}>2002−2025 © Альтера</div>
      </Container>
    </footer>
  );
}

export default Footer;
