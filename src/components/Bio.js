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
    if(bio){
        title = ''
    }else{
        title = 'My Story';
    };

    let content =
    <div className="card" onClick={bioClickHandler}> 
    <img src={splashPics[0]} alt='shift' className="splash-img" id="left"/>
    {title}{bio}
    </div> 
 
    return(
    <section>{content}</section>
    )
}

export default Bio;