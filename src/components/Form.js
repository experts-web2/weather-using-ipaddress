import React, { useState } from 'react';

const Form = ({ onSubmit,fetchSunSetData }) => {
  const [ip, setIp] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(ip);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter IP address"
        value={ip}
        onChange={event => setIp(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
