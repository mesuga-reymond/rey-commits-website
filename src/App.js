import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Hero from './components/Hero';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import ContentTable from './components/ContentTable';
import CarouselSlide from './components/CarouselSlide';
import RandomQuotes from './components/RandomQuotes';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <RandomQuotes />
            <ContentTable />
            <CardsList />
            <CarouselSlide />
            <Footer />
        </div>
    );
}

export default App;
