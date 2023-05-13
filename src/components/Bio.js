import '../styleSheets/bio.css'
import React, { useState } from 'react';
import { splashPics } from '../data';
import BioCard from './BioCard';

function Bio(){

    let biography = <BioCard/>
    

    const [bio, setBio] = useState('');

    const bioClickHandler = () => {
        !bio ?
        setBio(biography):
        setBio('');
       };

    let title = 'My Story';
    let bioImage = <img src={splashPics[0]} alt='shift' className='bio-splash-img' id="left"/>
    
    if(bio){
        title = ''
        bioImage = ''
    }else{
        title = 'My Story';
        bioImage = <img src={splashPics[0]} alt='shift' className='splash-img' id="left"/>
    };

    let content =
    <div className={!bio ? 'card' : 'active-bio-card'} onClick={bioClickHandler}> 
    {bioImage}
    {title}{bio}
    </div> 

  
 
    return(
    <section>{content}</section>
    )
}

export default Bio;