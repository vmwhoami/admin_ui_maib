import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Support from '../pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/support" component={Support} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
