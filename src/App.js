import Header from './component/Header';
import HeaderWhite from './component/HeaderWhite';
import HomeWithHero from './component/HomeWithHero';
import Team from './component/Team';
import './index.css';

function App() {
  return (
    <div className="App">
     
     <HomeWithHero></HomeWithHero>
     <HeaderWhite></HeaderWhite>
     <Header></Header>
     <Team></Team>

    </div>
  );
}

export default App;
