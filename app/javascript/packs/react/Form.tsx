import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

import ShortURL from './ShortURL';

export default () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setOriginalURL(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('link', {
      link: {
        original_url: originalURL
      }
    }).then(response => {
      if (response.status === 200) {
        setShortURL(response.data);
      }
    });
  }

  return (
    <>
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
      {shortURL && <ShortURL url={shortURL} />}
    </>
  )
};
