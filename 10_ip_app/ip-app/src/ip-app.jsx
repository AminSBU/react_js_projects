import React, { useState, useEffect } from 'react';

function ShowIP() {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIp() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIp(data.ip);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchIp();
  }, []);

  if (loading) return <div>Loading your IP address...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      Your IP address is: <strong>{ip}</strong>
    </div>
  );
}

export default ShowIP;