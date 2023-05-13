import Modal from './components/Modal'
//main pic
import main from './main.jpg'

//gallery pics
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

//splash pics
import shift from './splash-img/shift.jpg';
import block from './splash-img/block.jpg';
import look from './splash-img/look-up.jpg';

export const picturesObj = [
    {image: frontProfile, alt: 'front profile', className: 'item1', key: 1}, 
    {image:boStaff, alt:'bo staff', className:'item2'}, 
    {image:jumpyBoi, alt:'jumpy boi', className:'item3'}, 
    {image: streetBattle, alt: 'battle in the street', className:'item4'}, 
    {image: zenStatue, alt:'zen statue', className:'item5'}, 
    {image:spartan, alt:'spartan', className:'item6'}, 
    {image:certificate, alt:'certificate', className:'item7'}, 
    {image:intenseFace, alt:'intense face', className:'item8'}, 
    {image:matrix, alt:'matrix', class:'item9'}, 
    // {image:casualFull, alt:'casual in park', class:'item10'}, 
    // {image:oceanSquat, alt:'squatting by ocean'}
]; 

export const pictures = [frontProfile, boStaff, block, jumpyBoi, streetBattle, zenStatue, spartan, certificate, intenseFace, matrix]

export const splashPics = [shift, block, look];

export const mainPic = {main: main};