import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Microfrontend Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', border: '1px solid #ff4d4f', borderRadius: '4px', backgroundColor: '#fff2f0', color: '#ff4d4f' }}>
                    <h3>Component Load Error</h3>
                    <p>We're sorry, this section could not be loaded. Please try refreshing the page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
