import { Component, Fragment } from 'react';
import * as React from 'react';
import { HashRouter as BaseRouter, Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import Upload from './Upload';
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
              { to: '/upload', name: 'Загрузить' },
              { to: '/editor', name: 'Редактор' },
            ]}
          />
          <main>
            <Switch>
              <Route path="/upload" render={() => <Upload />} />
              <Route path="/editor" render={() => <Editor />} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BaseRouter>
    );
  }
}

export default App;
