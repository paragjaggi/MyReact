import './App.css';
import MyAnime from './MyAnime/MyAnime';
import Header from './MyAnime/header';
import SideBar from './MyAnime/sidebar';
import Footer from './MyAnime/footer';

const state = {
  name : 'Parag Jaggi',
  siteName : 'MyAnime'
}

function App() {
  return (
    <div className="App">
      <Header siteName = {state.siteName}/>
      <MyAnime />
      <Footer name={state.name}/>
    </div>
  );
}

export default App;
