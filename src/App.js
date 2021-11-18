import Movies from "./components/Movies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MovieDetails from "./components/MovieDetails";

function App() {


  return (
    <div className="App" >
      <Router >
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
