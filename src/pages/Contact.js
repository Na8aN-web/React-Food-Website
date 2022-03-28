import React from 'react';
import '../styles/contactStyle.css';
import banner from '../images/meal3.jpg'

function Contact() {
  const [formData, setFormData] = React.useState({
    name : "",
    email : "",
    textarea : ""
  })
  console.log(formData.name)
  function readInput(event){
     setFormData(prevInput =>{
      return {
        ...prevInput,
        [event.target.name] : event.target.value
      }
      
    })
  }
  return (
    <div className='contact-page'>

        <div className='leftside'>
          <img src={banner} className="banner-image"/>
        </div>

        <div className='rightside'>
            <h1>Contact Us</h1>
            <form>
            <label>First Name</label>
            <br></br>
            <input 
            type="text" 
            name="name"
            placeholder='Enter First Name'
            value={formData.name}
            onChange={readInput}
            />
            <br></br>
            <label>Email</label>
            <br></br>
            <input 
            type="email" 
            placeholder='Enter Email Address'
            value={formData.email}
            name="email"
            onChange={readInput}
            />
            <br></br>
            <label>Message</label>
            <br></br>
            <textarea 
            name="textarea"
            onChange={readInput}
            placeholder='Send Message'
            value={formData.textarea}
            ></textarea>
            <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact