import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

        </Switch>

      </BrowserRouter>
    </Container>
  );
}

export default App;
