import React, { useState, useEffect, use } from 'react';

function ShowIP() {
  const [ip, setIp] = useState(0);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(0);

  useEffect(() =>{
    async function IpDetails() {
        try
        {
            const getIpURL = 'https://api.ipify.org?format=json';
            const Response = await fetch(getIpURL);
            if(!Response.ok)
            {
                throw new Error('HTTP ERROR fetching ...');
            }
            const ipData = await Response.json();
            setIp(ipData.ip);

            console.log(ipData.ip);

            const getIpDescriptionURL = `http://ip-api.com/json/${ipData.ip}`;
            const DescResponse = await fetch(getIpDescriptionURL);
            if(!DescResponse.ok)
            {
                throw new Error('HTTP ERROR fetching ...');
            }
            const ipDescription = await DescResponse.json();
            setCountry(ipDescription.country);
        }
        catch(err)
        {
            setError(err.message);
        }
    }
  }, []);

  return (
    <div>
      Your IP address is: <strong>{ip}</strong>
    </div>
  );
}

export default ShowIP;