import React, { useState } from 'react';
import { splashPics } from '../data';

function Bio(){
    let biography = 'this is a bio'

    const [bio, setBio] = useState('');

    const bioClickHandler = () => {
        !bio ?
        setBio(biography):
        setBio('');
       };

    let title = 'Bio';
    if(bio){
        title = ''
    }else{
        title = 'Bio';
    } 

    let content =
    <div className="card" onClick={bioClickHandler}> 
    <img src={splashPics[0]} alt='shift' className="splash-img" id="left"/>
    {title}{bio}
    </div> ;
 
    return(
    <section>{content}</section>
    )
}

export default Bio;