/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import HeroAI from './components/heroComponents/HeroAI';
import CardsList from './components/bodyComponents/CardsList';
import Footer from './components/Footer';
import ContentTable from './components/ContentTable';
import CarouselSlide from './components/CarouselSlide';
import About from './components/bodyComponents/About';
import ScrollButton from './components/ScrollButton';
import NavTab from './components/NavTab';
import BooksList from './components/bodyComponents/BooksList';
import HeroAbout from './components/heroComponents/HeroAbout';
import HeroBookLibrary from './components/heroComponents/HeroBookLibrary';
import AppProjectList from './components/bodyComponents/AppProjectList';
import HeroAppList from './components/heroComponents/HeroAppList';
import Home from './components/bodyComponents/Home';
import HeroHome from './components/heroComponents/HeroHome' 
import RandomQuotes from './components/RandomQuotes';
import HeroClouds from './components/heroComponents/hero-clouds';
import HeroJet from './components/heroComponents/hero-jet';
import HeroAirplane from './components/heroComponents/hero-airplane';
import BGMusic from './components/bodyComponents/BGMusic';
import { Alert } from 'react-bootstrap';
import AlertPop from './components/bodyComponents/AlertPop';
function App() {
    return (
        <div className="App"> 
        <Router>
            <Navigation />
            {/* <HeroAirplane /> */}
            <HeroJet/>
            <HeroClouds/>
            <Switch>
                <Route exact path="/" component={HeroHome} />
                <Route exact path="/AI" component={HeroAI} />
                <Route path="/about" component={HeroAbout} />
                <Route path="/books" component={HeroBookLibrary} />
                <Route path="/app-projects" component={HeroAppList} />
            </Switch> 
            {/* <Hero /> */}
            {/* <AlertPop/> */}
            <NavTab />
            
            {/* <RandomQuotes/> */}
            <BGMusic/>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/AI" component={CardsList} />
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
