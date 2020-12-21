import * as React from 'react';
import { FC, ReactElement } from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import './styles.styl';

const Header: FC = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__container width-container">
        <Logo width="180px" height="50px" />
        <NavBar
          navItems={[
            { to: '/home', name: 'Главная' },
            { to: '/upload-video', name: 'Загрузить видео' },
            { to: '/upload-picture', name: 'Загрузить изображение' },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
