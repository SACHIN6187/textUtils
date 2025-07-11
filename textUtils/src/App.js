import './App.css';
import TextFrorm from './components/TextFrorm';
import Nevbar from './components/Nevbar';

function App() {
  return (
    <>
    <Nevbar title="TextUtils" about="about"/>
    <div className="container">
      <TextFrorm heading="Enter Your Text"/>
    </div>
    

    </>
  );
}

export default App;
