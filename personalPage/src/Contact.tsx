import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const email = import.meta.env.VITE_EMAIL;
const pub_key = import.meta.env.VITE_PUBLIC_KEY;
const pub_temp = import.meta.env.VITE_TEMPLATE_ID
const pub_name = import.meta.env.VITE_SERVICE_ID


export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: email
    };

    emailjs
      .send(
        pub_key,   
        pub_temp,
        templateParams,
        pub_name
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (err) => {
          console.error('FAILED...', err);
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-image">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=600&fit=crop" 
              alt="Person typing on laptop" 
            />
          </div>
          
          <div className="contact-form-container">
            <h2 className="contact-title">Contact</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
