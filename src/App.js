import './App.css';
import React from 'react';
import MyAnime from './MyAnime/MyAnime';
import Header from './MyAnime/header';
import SideBar from './MyAnime/sidebar';
import Footer from './MyAnime/footer';
import PureComponentExample from './Components/PureComponentExample';
import NormalComponentExample from './Components/NormalComponentExample';
import MemoComponentExample from './Components/MemoComponentExample';
import CountryComponent from './Error/CountryComponent';
import ErrorBoundary from './Error/ErrorBoundary';
import FunctionalHook from './Hooks/FunctionalHooks';

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
        <Header siteName={this.state.siteName} />
        <div>
          <PureComponentExample count={this.state.count} />
          <NormalComponentExample count={this.state.count} />
          <MemoComponentExample count={this.state.count} />
          <ErrorBoundary>
            <CountryComponent country="India" />
          </ErrorBoundary>
          <ErrorBoundary>
            <CountryComponent country="" />
          </ErrorBoundary>
          <FunctionalHook/>
        </div>
        {/* <MyAnime /> */}
        <Footer name={this.state.name} />
      </div>
    );

  }
}

export default App;
