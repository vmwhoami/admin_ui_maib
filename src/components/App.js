import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
