import { pictures } from "../data"

function Picture(){

    return(
        <div className='pic-carc'>
            { pictures.map(pic => <img src={pic.image} alt={pic.alt}/>)}
        </div>
    )
}

export default Picture;