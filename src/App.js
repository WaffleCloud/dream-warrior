import main from './main.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="intro"> 
      <h1>Christian Jimenez</h1>
      <p>Film Actor - Martial Artist - Voice Actor</p>
      </div>
      <img src={main} className="main-img" alt="main-img" />
      <div id="bio" className="card">Bio</div>
      <div id="gallery" className="card">Gallery</div>
      <div id="resume" className="card">Contact</div>
      <div class="contact"></div>

    </div>
  );
}

export default App;
