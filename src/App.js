import './App.css';
import CarouselImg from './components/mainPage/top/Carousel';
import SecondNav from './components/mainPage/top/SecondNav';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SecondNav/>
     <CarouselImg/>
    </div>
  );
}

export default App;
