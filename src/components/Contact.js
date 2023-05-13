import '../styleSheets/contact.css'
import { useState } from "react";
import { splashPics } from "../data";

function Contact(){

let content =
<section>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCsSpL2a09RaLKWdaIbY84AucShW6vIcoWOX9bDbFZYL-HLw/viewform?embedded=true" width="640" height="585" frameborder="0" marginheight="0" marginwidth="0" title='contact'>;
    Loading…
    </iframe>
</section>

const [form, setForm] = useState('');

const formClickHandler = () =>{
  !form ?
  setForm(content):
  setForm('')
  };

  let label = <p>contact</p>
  let contactImage = <img src={splashPics[1]} alt="block" className="contact-splash-img" id="left"/>
  if(form){
    label= <p className='close-form'>X close</p>
    contactImage = ''
  }else{
    label= <p style={{cursor:'pointer'}}>contact</p>
    contactImage = <img src={splashPics[1]} alt="block" className="contact-splash-img" id="left"/>
  };

return(
    <section>
    <div id="resume" className={!form ? 'contact-card' : 'contact-card-active'}>
        {contactImage}
        {form}
        <p onClick={formClickHandler}>{label}</p>
    </div>
    <div class="contact"></div> 
    </section>
    )
}

export default Contact;