import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
