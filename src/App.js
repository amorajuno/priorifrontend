import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer'
import './App.css';
import Forminputs from './components/form/Forminputs';
import Lista from './components/lista/lista';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editando from './pages/editando/editando';
import SingleView from './pages/singleView/SingleView'


function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Lista} />
        <Route path="/add" component={Forminputs} />
        <Route path="/:id" exact={true} component={SingleView} />
        <Route path="/:id/edit" component={Editando} />

      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
