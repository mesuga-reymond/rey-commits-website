/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import HeroAI from './components/HeroAI';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import ContentTable from './components/ContentTable';
import CarouselSlide from './components/CarouselSlide';
import About from './components/About';
import MainBody from './MainScreens/MainBody';
import ScrollButton from './components/ScrollButton';
import NavTab from './components/NavTab';
import BooksList from './components/BooksList';
import HeroAbout from './components/HeroAbout';
import HeroBookLibrary from './components/HeroBookLibrary';
import AppProjectList from './components/AppProjectList';
import HeroAppList from './components/HeroAppList';
import Home from './components/Home';
import HeroHome from './components/HeroHome'

function App() {
    return (
        <div className="App">
        <Router>
        <Navigation />
            <Switch>
                <Route exact path="/" component={HeroHome} />
                <Route exact path="/AI" component={HeroAI} />
                <Route path="/about" component={HeroAbout} />
                <Route path="/books" component={HeroBookLibrary} />
                <Route path="/app-projects" component={HeroAppList} />
            </Switch> 
            {/* <Hero /> */}
            <NavTab />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/AI" component={MainBody} />
                <Route path='/about' component={About} />
                <Route path='/books' component={BooksList} />
                <Route path="/app-projects" component={AppProjectList} />
            </Switch>
            <ScrollButton />
            {/* <CarouselSlide /> */}
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
