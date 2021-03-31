import './App.css';
import React from 'react';
import MyAnime from './MyAnime/MyAnime';
import Header from './MyAnime/header';
import SideBar from './MyAnime/sidebar';
import Footer from './MyAnime/footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Parag Jaggi',
      siteName: 'MyAnime'
    };
  }

  render() {
    return (
      <div className="App">
        <Header siteName={this.state.siteName} />
        <MyAnime />
        <Footer name={this.state.name} />
      </div>
    );

  }
}

export default App;
