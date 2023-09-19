import "./App.css";
import Navbar from "./components/Navbar";
import PredictTab from "./components/PredictTab";

const App = () => {
    return (
        <div className="bg h-screen">
            <Navbar />
            <PredictTab />
        </div>
    );
}

export default App;
