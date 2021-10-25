import { useState, useRef } from 'react';

// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

// utils
import { getServiceCode } from '../../../../utils/getServiceCode';
import { getRandomId } from '../../../../utils/generateId';

// styles
import { StyledFooter } from './Footer.styles';

const socialLinks = [
  {
    url: 'https://github.com/dannymichaels',
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    url: 'https://www.linkedin.com/in/👨🏽‍💻-daniel-michael-718825155',
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    icon: <TwitterIcon fontSize="large" />,
  },
  {
    icon: <YouTubeIcon fontSize="large" />,
  },
];

const bottomFooterLinks = `Audio and Subtitles,
Audio Description,
Help Center,
Gift Cards,
Media Center,
Investor Relations,
Jobs,
Terms of Use,
Privacy,
Legal Notices,
Cookie Preferences,
Corporate Information,
Contact Us`;

export default function Footer() {
  const [serviceCode, setServiceCode] = useState('');

  const randomId = useRef(`{${getRandomId(30)}}`); // useRef so the randomId doesn't change when clicking on other things such as generating a service code.

  const onGetServiceCode = () => {
    const result = getServiceCode();
    setServiceCode(result);
  };

  return (
    <StyledFooter>
      <div className="footer__content">
        <div className="footer__social-links">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <ul className="footer__member-links">
          {bottomFooterLinks.split(',').map((link, idx) => (
            <li className="footer__link-wrapper" key={idx}>
              <p className="footer__link">{link}</p>
            </li>
          ))}
        </ul>

        <div className="footer__service">
          <button
            className="footer__service-code"
            onClick={() => !serviceCode && onGetServiceCode()} // don't regenrate on second-click.
          >
            {serviceCode ? serviceCode : 'Service Code'}
          </button>
        </div>

        <div className="footer__copyright">
          <span>© 1997-2021 Fakeflix, Inc. ‎&lrm;</span>
          <span>&nbsp;{randomId.current}</span>
        </div>
      </div>
    </StyledFooter>
  );
}
