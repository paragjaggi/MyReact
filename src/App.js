import './App.css';
import React from 'react';
import MyAnime from './MyAnime/MyAnime';
import Header from './header';
import SideBar from './MyAnime/sidebar';
import Footer from './footer';
import PureComponentExample from './Components/PureComponentExample';
import NormalComponentExample from './Components/NormalComponentExample';
import MemoComponentExample from './Components/MemoComponentExample';
import CountryComponent from './Error/CountryComponent';
import ErrorBoundary from './Error/ErrorBoundary';
import FunctionalHook from './Hooks/FunctionalHooks';
import { Route, Switch } from 'react-router';
import Home from './RouterComponents/Home';
import NotFound from './RouterComponents/NotFound';
import { BrowserRouter } from 'react-router-dom';
import Register from './RouterComponents/Register';
import Naruto from './MyAnime/Naruto';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Parag Jaggi',
      siteName: 'MyAnime',
      count: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 0 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header siteName={this.state.siteName} />
          <div>
            {/* <PureComponentExample count={this.state.count} />
          <NormalComponentExample count={this.state.count} />
          <MemoComponentExample count={this.state.count} />
          <ErrorBoundary>
            <CountryComponent country="India" />
          </ErrorBoundary>
          <ErrorBoundary>
            <CountryComponent country="" />
          </ErrorBoundary>
          <FunctionalHook/> */}

          </div>
          {/* <MyAnime /> */}

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/naruto/:name" component={Naruto}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
          <Footer name={this.state.name} />
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
