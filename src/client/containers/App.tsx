import { Component, Fragment } from 'react';
import * as React from 'react';
import { HashRouter as BaseRouter, Route, Switch } from 'react-router-dom';
import UploadPicture from './UploadPicture';
import UploadVideo from './UploadVideo';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class App extends Component {
  render() {
    return (
      <BaseRouter>
        <Fragment>
          <NavBar
            navItems={[
              { to: '/home', name: 'Главная' },
              { to: '/upload-video', name: 'Загрузить видео' },
              { to: '/upload-picture', name: 'Загрузить изображение' },
            ]}
          />
          <main>
            <div className='width-container'>
              <Switch>
                <Route path="/upload-video" render={() => <UploadVideo />} />
                <Route path="/upload-picture" render={() => <UploadPicture />} />
              </Switch>
            </div>
          </main>
          <Footer />
        </Fragment>
      </BaseRouter>
    );
  }
}

export default App;
