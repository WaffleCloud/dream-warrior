
import React, {useState} from 'react';
import './gallery.css';
import { pictures } from './data.js';
import { splashPics } from './data.js';

function Gallery(props){
    const [gallery, setGallery] = useState(false);

    const galleryClickHandler = () => {
        !gallery ?
        setGallery(true):
        setGallery(false);
       };
       
       let option = 'View';
       let content = 
        <div className={!gallery ? 'card-center' : 'card-center-active'} onClick={galleryClickHandler}>
        <p>Gallery</p>
        <h3>{option}</h3>
        <img src={splashPics.look} alt="look" className="splash-img-right" />
      </div>;

      if(gallery){
        option = 'close';
        content =
        <div className={!gallery ? 'card-center' : 'card-center-active'} onClick={galleryClickHandler}>
        { pictures.map(pic => <img src={pic.image} alt={pic.alt}/>)}
        <h3>{option}</h3>
        <img src={splashPics.look} alt="look" className="splash-img-right" />
      </div>;
      }
   
    return(
      <div>{content}{gallery}</div>
        // <div className='pictures-container'> 
          
        //   <div className='pic-card'>
        //     {/* {props.pictures.map(({src}) => (<img key={src} src={src} alt=''/>))} */}
        //     {/* {props.pictures[0]} */}
        //     {/* <img src={props.pictures[0]} alt=''/> */}
        //     {/* <img src={props.pictures[props.pictures.map(pic => pic)]} alt="" /> */}
        //     { pictures.map(pic => <Gallery pictures = {pic}/>)}
        //     {/* <img src={props.pictures} id='pic' alt=''/>  */}
        //     </div>
        // </div>

       
      //   <div className={!gallery ? 'card-center' : 'card-center-active'} onClick={galleryClickHandler}>
      //   {gallery} 
      //   <p>Gallery</p>
      //   { pictures.map(pic => <Gallery pictures = {pic}/>)}
      //   <img src={look} alt="look" className="splash-img-right" />
      // </div>
      
    )
}

export default Gallery;