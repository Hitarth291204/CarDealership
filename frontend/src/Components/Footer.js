import React from 'react';
import '../style/Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-contact'>Have any questions or need assistance? Reach out to us through the following channels:<br></br><br></br>
        Email: support@elitleWheels.com
        <br></br>
        Phone: +91  1234567890
        <br></br>
        Address: 123 Luxury Lane, Premium City, PC 12345
        <br></br>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      </div>
      <div className="footer-content">
      <div className='footer-copyright'>&copy; 2024 Your Company. All rights reserved.</div>
      <br></br>
      </div>
    </footer>
  );
};

export default Footer;
