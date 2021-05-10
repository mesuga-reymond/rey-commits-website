import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Hero from './components/Hero';
import CardsList from './components/CardsList';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <CardsList />
            <h1>React</h1>
        </div>
    );
}

export default App;
