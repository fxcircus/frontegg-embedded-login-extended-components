import CarouselComponent from './CarouselComponent';
import HeaderComponent from './HeaderComponent';
import LanguageSelector from './LanguageSelector';
import './Footer.css';

const themeOptions = {
    loginBox: {
      boxStyle: {
        boxShadow: 'none',
        background: 'transparent'
      },
      layout: {
        type: 'float-left',
        splitSize: 50,
        sideElement: () => {
          return <div style={{ width: '100%' }}><CarouselComponent /></div>;
        },
        sideElementStyle: { width: '10%' }
      },
      pageHeader: () => <HeaderComponent />,
      pageFooter: () => (
        <div className="footer">
          <div className="footer-container">
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} ACME Inc. All rights reserved.
            </div>
            <LanguageSelector /> {/* Use the imported LanguageSelector */}
            <div className="footer-links">
              <a href="http://localhost:3000/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              <a href="http://localhost:3000/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="http://localhost:3000/legal" target="_blank" rel="noopener noreferrer">Legal</a>
            </div>
          </div>
        </div>
      ),
      className: 'login-box'
    }
  };

export default themeOptions