import React from 'react';
import { Menu, NewColor, Colors } from './containers';

import '../style/app.css';

const App = () => (
    <div className="app">
        <Menu className="app__menu" />
        <NewColor className="app__add-color-form" />
        <Colors className="app__colors" />
    </div>
);

export default App