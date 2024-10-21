import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
