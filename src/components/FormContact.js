import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import '../css/form-contact.css'
import{BiMailSend} from'react-icons/bi'
import{MdMarkEmailRead} from'react-icons/md'


export default function FormContact() {
    const formRef = useRef(null);
    const [send,setSend]=useState(false);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_i1mfj9b', 'template_0d85kaf', formRef.current, 'eBz7c3PqvtMCQIosz')
      .then((result) => {
          console.log(result.text);
          if(result.text==='OK'){
            setSend(true);
          }
      }, (error) => {
          console.log(error.text);
      });
        // eslint-disable-next-line
      };
    
  return (
    <div className='formContainer'>
        <form ref={formRef} onSubmit={handleSubmit} >

        <div className="userBox">
          <input
            type="text"
            name="user_name"
            required
          />
          <label>Nome</label>
          
        </div>

        <div className="userBox ">
          <input
            type="email"
            name="user_email"
            required
          />
          <label>Email</label>
          
        </div>

        <div className="userBox">
          <textarea
            type="text"
            name="message"
            required
          />
          <label>Messaggio</label>
          
        </div>

        <button type="submit" className='btn'>
         {send?<MdMarkEmailRead/>:<BiMailSend/>} 
        </button>

        </form>
    </div>
  )
}
