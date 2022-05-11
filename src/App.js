import CategoryFilter from './component/CategoryFilter';
import Explore from './component/Explore';
import Header from './component/Header';
import HeaderWhite from './component/HeaderWhite';
import HeroTitle from './component/HeroTitle';
import Home from './component/Home';
import HomeWithHero from './component/HomeWithHero';
import Navbar from './component/Navbar';
import ProductOverview from './component/ProductOverview';
import Quickview from './component/Quickview';
import Registration from './component/Registration';
import Team from './component/Team';
import './index.css';

function App() {
  return (
    <div className="App">
     <HomeWithHero></HomeWithHero>
     <Home></Home>
     <Navbar></Navbar>
     <HeaderWhite></HeaderWhite>
     <Header></Header>
     <Team></Team>
     <HeroTitle></HeroTitle>
     {/* <From></From> */}
     <Registration></Registration>
     <ProductOverview></ProductOverview>
     <CategoryFilter></CategoryFilter>
     <Quickview></Quickview>
     <Explore></Explore>
    </div>
  );
}

export default App;
