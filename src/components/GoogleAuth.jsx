
import React, { useState, useEffect } from 'react';
import '../App.css';

const GoogleAuth = ({ onAuthSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Simulate Google OAuth flow
  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // In a real implementation, you would use Google OAuth
    // For this demo, we'll simulate the process
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        name: 'Demo User',
        email: 'user@example.com',
        picture: 'https://via.placeholder.com/40',
        loginTime: new Date().toISOString()
      };
      
      // Store user data in localStorage
      localStorage.setItem('soundpix_user', JSON.stringify(userData));
      
      setIsLoading(false);
      onAuthSuccess(userData);
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Welcome to <span className="gradient-text">SoundPix</span></h2>
          <p>Sign in to start creating amazing content</p>
        </div>
        
        <button 
          className={`google-login-button ${isLoading ? 'loading' : ''}`}
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner-small"></div>
              Signing in...
            </>
          ) : (
            <>
              <i className="fab fa-google"></i>
              Continue with Google
            </>
          )}
        </button>
        
        <div className="auth-footer">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
