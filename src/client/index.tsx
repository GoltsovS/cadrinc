import * as React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  render(<App />, rootElement);
}
