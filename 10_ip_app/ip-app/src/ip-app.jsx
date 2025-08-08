import React, { useEffect, useState } from "react";

function App() {
  const [ip, setIp] = useState(null);
  const [info, setInfo] = useState(null);
  const [loadingIp, setLoadingIp] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpAndInfo = async () => {
      setError(null);
      setLoadingIp(true);
      try {
        // 1) Get public IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (!ipRes.ok) throw new Error(`ipify request failed: ${ipRes.status}`);
        const ipData = await ipRes.json();
        const userIp = ipData.ip;
        setIp(userIp);
        setLoadingIp(false);

        // 2) Get geo / country / other info from ip-api
        setLoadingInfo(true);
        // ip-api supports http and https depending on plan; use http endpoint per your prompt
        // If serving the app over HTTPS, browsers may block mixed content if you use http.
        // In production prefer https://ipapi.co or an https ip-api provider or proxy the request server-side.
        const infoRes = await fetch(`http://ip-api.com/json/${encodeURIComponent(userIp)}`);
        if (!infoRes.ok) throw new Error(`ip-api request failed: ${infoRes.status}`);
        const infoData = await infoRes.json();
        if (infoData.status !== "success") {
          throw new Error(`ip-api error: ${infoData.message || "unknown"}`);
        }
        setInfo(infoData);
        setLoadingInfo(false);
      } catch (err) {
        setLoadingIp(false);
        setLoadingInfo(false);
        setError(err.message || "Unknown error");
      }
    };

    fetchIpAndInfo();
  }, []);

  return (
    <div style={{ fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif", padding: 20 }}>
      <h1>User IP & Location</h1>

      {loadingIp && <p>Fetching IP address…</p>}
      {ip && <p><strong>Your IP:</strong> {ip}</p>}

      {loadingInfo && <p>Fetching location & country info…</p>}

      {error && (
        <div style={{ color: "red", marginTop: 10 }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {info && (
        <div style={{ marginTop: 10 }}>
          <h2>IP Information</h2>
          <p><strong>Country:</strong> {info.country} ({info.countryCode})</p>
          <p><strong>Region / State:</strong> {info.regionName} ({info.region})</p>
          <p><strong>City:</strong> {info.city}</p>
          <p><strong>ZIP:</strong> {info.zip}</p>
          <p><strong>Latitude / Longitude:</strong> {info.lat}, {info.lon}</p>
          <p><strong>ISP:</strong> {info.isp}</p>
          <p><strong>Organization:</strong> {info.org}</p>
          <p><strong>AS:</strong> {info.as}</p>
          <p><strong>Timezone:</strong> {info.timezone}</p>
          <p><strong>Query (IP):</strong> {info.query}</p>
        </div>
      )}
    </div>
  );
}

export default App;