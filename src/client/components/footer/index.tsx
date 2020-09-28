import * as React from 'react';
import {FC, ReactElement} from "react";
import './styles.styl';

const Footer: FC = (): ReactElement => {
    return (
        <footer className='footer'>
            <section className='footer__col'>
                <span className='footer__copyright'>Все права защищены © 2020 CadrInc</span>
            </section>
        </footer>
    );
};

export default Footer;