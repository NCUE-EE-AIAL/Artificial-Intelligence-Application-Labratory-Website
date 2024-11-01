import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contact.css'; // Ensure CSS for styling is included
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('access_key', 'd5c2d62d-26f1-468d-b17f-fa91df183520'); // Replace with your actual Web3Forms access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Message Sent Successfully',
          icon: 'success',
        });
        clearState();
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.message || 'Something went wrong. Please try again.',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Could not connect to Web3Forms. Please try again later.',
        icon: 'error',
      });
      console.error('Submission error:', error);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          We value your feedback. Please fill out the form below to get in touch with us, and we will respond as soon as possible.
        </p>
        <div className='main'>
          <div className="contact-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className='sec'>
              <h3>Contact Information</h3>
              <p>National Changhua University of Education</p>
              <p><span>Phone:</span> 886-4-7232105</p>
              <p><span>Email:</span> <a href="mailto:ncueaial@gmail.com">ncueaial@gmail.com</a></p>
            </div>
            <div className="social-media">
              <h3>Follow Us</h3>
              <a href="https://github.com/NCUE-EE-AIAL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.facebook.com/share/foHmCkxWDa8Knune/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/wry87c" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container text-center">
          <p>&copy; 2024 AI Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
