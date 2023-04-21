
import React, {useState} from 'react';
import './gallery.css';

function Gallery(props){
    const [hideGallery, viewGallery] = useState('');
   
    return(
        <div className='pictures-container'> 
          
          <div className='pic-card'>
            {/* {props.pictures.map(({src}) => (<img key={src} src={src} alt=''/>))} */}
            {/* {props.pictures[0]} */}
            {/* <img src={props.pictures[0]} alt=''/> */}
            {/* <img src={props.pictures[props.pictures.map(pic => pic)]} alt="" /> */}
            
            <img src={props.pictures} alt=''/> 
            </div>
        </div>
    )
}

export default Gallery;