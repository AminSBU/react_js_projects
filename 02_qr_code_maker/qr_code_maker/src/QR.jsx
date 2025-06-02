import React, { useEffect, useState } from "react";

function QR() {
  const [temp, setTemp] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  function qrInputHandler(event) {
    setTemp(event.target.value);
  }

  function clickHandler() {
    // Build the QR code URL dynamically using the current input value
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(temp)}`;
    setQrUrl(url);
  }

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={temp}
          onChange={qrInputHandler}
          placeholder="Enter text to generate QR"
        />
        <button onClick={clickHandler}>Make QR</button>
      </div>
      {qrUrl && (
        <div>
          <img src={qrUrl} alt="Generated QR code" />
        </div>
      )}
    </>
  );
}

export default QR;