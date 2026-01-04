import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/aman-raj-a3710622a/',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    hoverClass: 'hover:text-blue-600',
  },
  {
    href: 'https://github.com/IAMAmanRaj',
    icon: BsGithub,
    label: 'GitHub',
    hoverClass: 'hover:opacity-85',
  },
  {
    href: 'https://www.instagram.com/i_m_amanraj87/',
    icon: FaInstagram,
    label: 'Instagram',
    hoverClass: 'hover:text-pink-700',
  },
];

export const SocialLinks = () => {
  return (
    <nav>
      <div className="grid grid-flow-col gap-4">
        {socialLinks.map(({ href, icon: Icon, label, hoverClass }) => (
          <Link 
            key={label}
            to={href} 
            aria-label={label}
            className={`transition-all duration-300 ${hoverClass}`}
          >
            <Icon size={30} />
          </Link>
        ))}
      </div>
    </nav>
  );
};