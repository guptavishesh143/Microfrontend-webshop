import React from 'react';
import { _publicPath, _env } from '../../mfe-shared/utils/urlConfigs';

const Navbar = () => {
  const env = {}; // Context or state could provide this
  const argv = { name: 'wrangler' }; // Current brand

  const navStyle = {
    position: 'fixed',
    top: '48px',
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    zIndex: 50,
    height: '64px',
    fontFamily: 'var(--font-family, sans-serif)'
  };

  const containerStyle = {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '0 16px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'var(--color-primary, #4f46e5)',
    marginRight: 'auto'
  };

  const linksContainerStyle = {
    display: 'flex',
    gap: '16px'
  };

  const linkStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#4b5563',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };

  const links = [
    { name: 'Home', url: _publicPath('host', env, argv) },
    { name: 'Shop', url: _publicPath('decide', env, argv) },
    { name: 'Checkout', url: _publicPath('checkout', env, argv) },
    { name: 'Blogs', url: _publicPath('blogs', env, argv) },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>MFE Demo</div>
        <div style={linksContainerStyle}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              style={linkStyle}
              onMouseOver={(e) => e.target.style.color = 'var(--color-primary, #4f46e5)'}
              onMouseOut={(e) => e.target.style.color = '#4b5563'}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
