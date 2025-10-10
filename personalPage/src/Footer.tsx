import './Footer.css';

const socialLinks = [
  {
    name: 'Facebook',
    icon: 'f',
    url: 'https://www.facebook.com'
  },
  {
    name: 'LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/in/smitha-s-17a364183'
  },
  {
    name: 'Twitter',
    icon: '𝕏',
    url: 'https://x.com/'
  }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">S</div>
          </div>
          
          <div className="footer-text">
            <p>Check Out My Socials</p>
          </div>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

