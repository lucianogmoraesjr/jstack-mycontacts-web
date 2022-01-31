import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';
import { Edit } from './pages/Edit';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-contact" component={NewContact} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
