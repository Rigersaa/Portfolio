import React from 'react';
import '../styles/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Collect form data
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to an object
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Send email using EmailJS
    emailjs.send('service_h4wp3yn', 'template_h8lgwmt', data, '4W6Oi_BX-1XXXxl6p')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
  };

  return (
    <section id="contact">
      <div className="contact-form">
        <h2 style={{ color: '#AB70FF' }}>Let’s work together!</h2>
        <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <input type="text" id="firstName" name="firstName" placeholder="First name" required style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white' }} />
            <input type="text" id="lastName" name="lastName" placeholder="Last name" required style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <input type="email" id="email" name="email" placeholder="Email address" required style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white' }} />
            <input type="tel" id="phone" name="phone" placeholder="Phone number" required style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white' }} />
          </div>
          <select id="option" name="option" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white', marginBottom: '20px' }}>
            <option value="" disabled selected>—Please choose an option—</option>
            <option value="branding">Branding Design</option>
            <option value="web-development">Web Development</option>
            <option value="wordpress">WordPress</option>
            <option value="ui-ux">UI/UX</option>
          </select>
          <textarea id="message" name="message" placeholder="Message" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#1b0c27', color: 'white', marginBottom: '20px' }}></textarea>
          <button type="submit" style={{ padding: '15px 30px', borderRadius: '5px', border: 'none', backgroundColor: '#AB70FF', color: 'white', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <div>
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <p>+355 685 114 653</p>
        </div>
        <div>
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <p>rigersabicakuu@mail.com</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/rigersa-bicaku-044ba4256/" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
