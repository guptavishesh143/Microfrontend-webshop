import React from 'react';

const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'var(--color-primary, #4f46e5)', // Use theme primary
        color: '#ffffff',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        zIndex: 60,
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        fontFamily: 'var(--font-family, sans-serif)'
    };

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const logoIconStyle = {
        width: '24px',
        height: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const logoTextStyle = {
        color: '#4f46e5',
        fontSize: '12px',
        fontWeight: 'bold'
    };

    const brandNameStyle = {
        fontWeight: 600,
        letterSpacing: '-0.025em'
    };

    const navItemsStyle = {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        fontSize: '12px',
        fontWeight: 500,
        opacity: 0.9
    };

    return (
        <header style={headerStyle}>
            <div style={logoContainerStyle}>
                <div style={logoIconStyle}>
                    <span style={logoTextStyle}>A</span>
                </div>
                <span style={brandNameStyle}>Aceturtle Portal</span>
            </div>
            <div style={navItemsStyle}>
                <span>Support</span>
                <span>Account</span>
            </div>
        </header>
    );
};

export default Header;
