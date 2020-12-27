import * as React from 'react';
import { FC, ReactElement } from 'react';
import Logo from '../logo';
import './styles.styl';

const Footer: FC = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__container width-container">
        <section className="footer__col">
          <span className="footer__copyright">Все права защищены © 2020 CadrInc</span>
        </section>
        <section className="footer__col">
          <Logo width='90px' height='20px'/>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
