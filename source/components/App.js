import React from 'react';
import { Menu, NewColor, Colors } from './containers';

import '../style/app.css';

const App = () => (
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>
);

export default App