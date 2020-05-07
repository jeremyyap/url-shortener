import React, { useState, ChangeEvent } from 'react';

export default () => {
  const [originalURL, setOriginalURL] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setOriginalURL(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-bg">
        <div className="form">
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={originalURL}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Shorten</button>
        </div>
      </div>
    </form>
  )
};
