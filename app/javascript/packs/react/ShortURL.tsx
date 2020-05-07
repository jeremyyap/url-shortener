import React from 'react';

interface ShortURLProps {
  url: string;
}

export default ({ url }: ShortURLProps) => {
  const copy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  return (
    <div className="result">
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      <button onClick={copy}>Copy</button>
    </div>
  );
};
