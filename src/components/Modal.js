import { useState } from "react";
import '../styleSheets/modal.css'
import { picturesObj } from '../data'
import '../styleSheets/picture.css'
import '../styleSheets/gallery.css'

export default function Modal(){
    
    const [data, setData] = useState({img: '', i: 0});

    const viewImage= (img, i)=>{
        setData({img, i})
       }
    
    const imageAction = (action) =>{
        let i = data.i;
      if(!action){
         setData({img: '', i: 0})
      }
     }
    return(
    <>
    {/* modal logic */}
   {data.img  &&
         <div className='modal-overlay' onClick={()=>imageAction()}> 
            <button onClick={()=>imageAction()} 
            className='btn-x btn'>X</button>
            
            <img src={data.img} alt='' className='modal-image'/>
            
        </div>
        }

        {/* gallery content */}
      <div className='images'>
                    {picturesObj.map((image, i) => (
                        <img
                            key={i}
                            src={image.image}
                            className= 'image-card'
                            alt={image.alt}
                            onClick={()=>viewImage(image.image, i)}
                            style={{cursor:'pointer'}}
                        />
                    ))}
        </div> 
     
    </>
    )
}

// {/* <button onClick={()=>imageAction('next-img')} 
//             className='btn-next btn'>next</button> */}
// {/* <button onClick={()=>imageAction('prev-img')}
//             className='btn-prev btn'>prev</button> */}
// if(action === 'next-img'){
//   setData({img:picturesObj[i + 1].image, i: i + 1});
// }
// if(action === 'prev-img'){
// setData({img:picturesObj[i -1].image, i: i - 1})
// }