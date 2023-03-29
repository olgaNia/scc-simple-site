import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
        <Sidebar />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
