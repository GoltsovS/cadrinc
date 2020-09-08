import * as React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
    render(
        <div>Hello, i'm typescript react app =)</div>,
        rootElement
    );
}