import React from "react";
import "./Contact.css";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_dlp4qrh";
const TEMPLATE_ID = "template_g4csijb";
const PUBLIC_KEY = "oGA_zp1BnFbZFEu9o";


//https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3 
//FOR CONTACT FROM ^^^^
function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      user_email: form.user_email.value,
      user_name: form.user_name.value,
      user_message: form.user_message.value,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset();
  };
  return (
    <div className='contact'>
      <div className="itemc">
        <div>
          <div className="contact-info">
            <p className="email">
              <a href="mailto:william@dwjcurbsidellc.com" className="mailto-link">
                Email: william@dwjcurbsidellc.com
              </a>
            </p>
            <p className="phone">
              <a href="tel:+1347-509-4212" className="tel-link">
                Phone: 347-509-4212
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="itemc">
        <div>
            <Form onSubmit={handleOnSubmit}>
              <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='user_email'
                placeholder='Email…'
                required
                icon='mail'
                iconPosition='left'
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Name'
                name='user_name'
                placeholder='Name…'
                required
                icon='user circle'
                iconPosition='left'
              />
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                name='user_message'
                placeholder='Message…'
                required
              />
              <Button type='submit' color='grey'>Submit</Button>
            </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
