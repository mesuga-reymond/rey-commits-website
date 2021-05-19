/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Hero from './components/Hero';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import ContentTable from './components/ContentTable';
import CarouselSlide from './components/CarouselSlide';
import About from './components/About';
import MainBody from './MainScreens/MainBody';

function App() {
    return (
        <div className="App">
        <Router>
            <Navigation />
            <Hero />
            
                <Switch>
                <Route exact path="/" component={MainBody} />
                <Route path='/about' component={About} />
                </Switch>
            <CarouselSlide />
            <Footer />
            {/* <RandomQuotes />
            <ContentTable />
            <CardsList />
            <CarouselSlide />
            <Footer /> */}
        </Router>
            
        </div>
    );
}

export default App;
