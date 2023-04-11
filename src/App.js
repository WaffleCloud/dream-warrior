import './App.css';
import main from './main.jpg';
// const shift = {
//   name: "picture",
//   image: require('./splash-img/shift.jpg')
// }
import shift from './splash-img/shift.jpg';
import block from './splash-img/block.jpg';
import look from './splash-img/look-up.jpg';


function App() {
  return (
    <div className="container">

      <div className="intro"> 
      <h1>Christian Jimenez</h1> 
      <h2>Film Actor - Martial Artist - Voice Actor</h2>
      </div>
      <div className="main-img-container"><img src={main} className="main-img" alt="main-img" /></div>
      <div id="bio" className="card"> <img src={shift} alt="shift" className="splash-img" id="left"/>Bio and Resume</div>
      <div id="gallery" className="card-center">Gallery<img src={look} alt="look" className="splash-img-right" /></div>
      <div id="resume" className="card"><img src={block} alt="block" className="splash-img" id="left"/>Contact</div>
      <div class="contact"></div>

    </div>
  );
}

export default App;
