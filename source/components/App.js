import { Switch, Route } from 'react-router-dom';
import { NewColor, Colors, Color } from './containers';
import SortMenu from './ui/SortMenu';
import Whoops404 from './ui/Whoops404';

import '../style/app.css';

const App = () => (
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/" component={() => (
            <div className="app">
                <Route render={routeProps => <SortMenu {...routeProps} className="app__menu" />} />
                <NewColor className="app__add-color-form" />
                <Switch>
                    <Route exact path="/" render={routeProps => <Colors {...routeProps} className="app__colors" />} />
                    <Route path="/sort/:sort" render={routeProps => <Colors {...routeProps} className="app__colors" />} />
                    <Route component={Whoops404} />
                </Switch>
            </div>
        )} />
    </Switch>
);

export default App;