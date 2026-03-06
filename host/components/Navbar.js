import React from 'react';

const Navbar = () => {
  const navStyle = {
    position: 'fixed',
    top: '48px',
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    zIndex: 50,
    height: '64px',
    fontFamily: 'sans-serif'
  };

  const containerStyle = {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '0 16px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between'
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4f46e5',
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
    { name: 'Page 1 (Host)', url: 'http://localhost:3001' },
    { name: 'Page 2 (Decide)', url: 'http://localhost:3002' },
    { name: 'Page 3 (Checkout)', url: 'http://localhost:3003' },
    { name: 'Page 4 (Blogs)', url: 'http://localhost:3004' },
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
              onMouseOver={(e) => e.target.style.color = '#4f46e5'}
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
