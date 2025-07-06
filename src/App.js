import React, { useState } from 'react';
import './App.css';
// 备用方案：直接导入图片
import allinbonkImage from './allinbonk.jpeg';

function App() {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 处理图片加载错误
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="profile-section">
          <div className="avatar">
            <img
              src={imageError ? allinbonkImage : `${process.env.PUBLIC_URL}/allinbonk.jpeg`}
              alt="Allin Bonk"
              className="avatar-image"
              onError={handleImageError}
            />
          </div>

          {/* 名字 */}
          <h1 className="name">🐷 Allin Bonk</h1>

          {/* CA信息区域 */}
          <div className="ca-section">
            <div className="ca-label">Contract Address (CA)</div>
            <div className="ca-container">
              <div className="ca-address">
                C9qU3zrWk48aj1VYMsTEYr8WQhSTU5KnAjchZCBxbonk
              </div>
              <button
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={() => copyToClipboard('C9qU3zrWk48aj1VYMsTEYr8WQhSTU5KnAjchZCBxbonk')}
              >
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
          </div>

          {/* 社交链接 */}
          <div className="social-links">
            <a href="https://x.com/i/communities/1941128812089188753" className="social-link facebook" target="_blank" rel="noopener noreferrer">
              <span className="icon">📘</span>
              <span className="text">Community Twitter Link</span>
            </a>

            <a href="https://t.me/suohas" className="social-link telegram" target="_blank" rel="noopener noreferrer">
              <span className="icon">✈️</span>
              <span className="text">Telegram</span>
            </a>

            <a href="https://x.com/allinbonk" className="social-link twitter" target="_blank" rel="noopener noreferrer">
              <span className="icon">🐦</span>
              <span className="text">Twitter</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
