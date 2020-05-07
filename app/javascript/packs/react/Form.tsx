import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

import ShortURL from './ShortURL';

export default () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setOriginalURL(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('link', {
      link: {
        original_url: originalURL
      }
    }, {
      timeout: 5000
    }).then(response => {
      setShortURL(response.data);
      setError('');
    }).catch(err => {
      if (!err.response) {
        setError(err.message);
      } else if (err.response.data) {
        setError(err.response.data.message)
      } else if (err.response.status == 400) {
        setError('An error occurred while shortening your URL, please try again.')
      } else if (err.response.status >= 500) {
        setError('Something is wrong with the server, please try again later.');
      }
      setShortURL('');
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
      {error && <div className="error">{error}</div>}
      {shortURL && <ShortURL url={shortURL} />}
    </>
  )
};
