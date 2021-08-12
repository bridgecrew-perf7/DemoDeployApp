import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './pages/home/home';
import about from './pages/about/about';
import HomeComponent from './Components/HomeComponent';
import { HomeTemplate } from './Template/HomeTemplate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path='/home' component={home}></HomeTemplate>
          <HomeTemplate exact path='/about' component={about}></HomeTemplate>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
