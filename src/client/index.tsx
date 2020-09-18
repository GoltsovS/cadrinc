import * as React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './common/styles/common.styl';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  render(<App />, rootElement);
}
