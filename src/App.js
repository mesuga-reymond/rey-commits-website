import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Demo from "./components/Demo"
import Hero from './components/Hero';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <Demo />
            <h1>React</h1>
        </div>
    );
}

export default App;
