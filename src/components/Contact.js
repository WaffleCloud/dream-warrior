import { useState } from "react";
import { splashPics } from "../data";

function Contact(){

let content =
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCsSpL2a09RaLKWdaIbY84AucShW6vIcoWOX9bDbFZYL-HLw/viewform?embedded=true" width="640" height="585" frameborder="0" marginheight="0" marginwidth="0" title='contact'>;
    Loading…
    </iframe>

const [form, setForm] = useState('');

const formClickHandler = () =>{
  !form ?
  setForm(content):
  setForm('')
  };

return(
    <section>
    <div id="resume" className="card" onClick={formClickHandler}><img src={splashPics[1]} alt="block" className="splash-img" id="left"/>{form}</div>
        <p>Contact</p>
    <div class="contact"></div> 
    </section>
    )
}

export default Contact;