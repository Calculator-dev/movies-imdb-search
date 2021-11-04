import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {


  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/title/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
