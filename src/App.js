import React, { useState } from 'react';
import './App.css';
import Bio from './components/Bio';
import Gallery from './components/Gallery'
import Contact from './components/Contact';
import main from './main.jpg';

//!splash pictures!
import shift from './splash-img/shift.jpg';
import block from './splash-img/block.jpg';
import look from './splash-img/look-up.jpg';

//!gallery pics!
import frontProfile from './gallery/front-profile.jpg';
import boStaff from './gallery/bo-staff.jpg';
import jumpyBoi from './gallery/jumpy-boi.jpg';
import streetBattle from './gallery/street-battle.png';
import zenStatue from './gallery/zen-statue.jpg';
import spartan from './gallery/spartan.jpg';
import certificate from './gallery/certificate.jpg';
import intenseFace from './gallery/intense-face.jpg';
import matrix from './gallery/matrix.jpg';
import casualFull from './gallery/casual-full.jpg';
import oceanSquat from './gallery/ocean-squat.jpg';

//!component!

function App(props) {

  //!props!
 const pictures = [frontProfile, boStaff, jumpyBoi]; 
  // {1: boStaff, 2:jumpyBoi, 3:streetBattle, 4:zenStatue, 5:spartan, 6:certificate, 7:intenseFace, 8:matrix, 9:casualFull, 10:oceanSquat}]

  //!variables!

  const bioText = 'this is a bio';


  //!state changes!

 const [form, fillForm] = useState('');
 const [gallery, viewGallery] = useState('');
 const [biography, viewBio] = useState('');

 //!click handlers!

 const formClickHandler = () =>{
  !form ?
  fillForm('give me your social security # its for science') :
  fillForm('')
 };

 const galleryClickHandler = () => {
  !gallery ?
  viewGallery('image') :
  viewGallery('')
 };

 const bioClickHandler = () => {
  !biography ?
  viewBio(bioText):
  viewBio('');
 };

  return (
    <div className="container">

      <div className="intro"> 
      <h1>Christian Jimenez</h1> 
      <h2>Film Actor - Martial Artist - Voice Actor</h2>
      </div>
      {/* <img src={pictures[0]} alt='' />
      <img src={pictures[1]} alt=''/> */}
      <div className="main-img-container"><img src={main} className="main-img" alt="main-img" /></div>
      <div id="bio" className="card" onClick={bioClickHandler}> <img src={shift} alt="shift" className="splash-img" id="left"/>{biography}<Bio /></div>
      <div id="gallery" className="card-center" onClick={galleryClickHandler}>
        {gallery} 
        <p>Gallery</p>
        { pictures.map(pic => <Gallery pictures = {pic}/>)}
        <img src={look} alt="look" className="splash-img-right" />
      </div>
      <div id="resume" className="card" onClick={formClickHandler}><img src={block} alt="block" className="splash-img" id="left"/>{form}<Contact/></div>
      <div class="contact"></div>

    </div>
  );
}

export default App;
