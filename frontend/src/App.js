import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import EditProperty from "./components/EditProperty";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <PropertyList />
          </Route>
          <Route path="/add">
            <AddProperty />
          </Route>
          <Route path="/edit/:id">
            <EditProperty />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
