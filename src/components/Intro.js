import { mainPic } from '../data'

function Intro(){
    return(
    <section>
      <div className="intro"> 
      <h1>Christian Jimenez</h1> 
      <h2>Film Actor - Martial Artist - Voice Actor</h2>
      </div> 
      <div className="main-img-container">
      <img src={mainPic.main} className="main-img" alt="main-img" />
      </div>
    </section>
    )
}

export default Intro;