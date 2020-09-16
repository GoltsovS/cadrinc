import { Component, Fragment } from 'react';
import * as React from 'react';
import { HashRouter as BaseRouter, NavLink, Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import Upload from './Upload';

class App extends Component {
  render() {
    return (
      <BaseRouter>
        <Fragment>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/upload" activeClassName="active">
                  Загрузить
                </NavLink>
              </li>
              <li>
                <NavLink to="/editor" activeClassName="active">
                  Редактор
                </NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/upload" render={() => <Upload />} />
              <Route path="/editor" render={() => <Editor />} />
            </Switch>
          </main>
        </Fragment>
      </BaseRouter>
    );
  }
}

export default App;
