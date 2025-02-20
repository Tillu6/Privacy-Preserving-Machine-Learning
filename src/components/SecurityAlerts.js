import React, { useState, useEffect } from "react";

export default function SecurityAlerts() {
  const [alert, setAlert] = useState("No security issues detected.");

  useEffect(() => {
    const checkAnomalies = async () => {
      const response = await fetch("http://localhost:5000/anomaly-detect", { method: "POST" });
      const data = await response.json();
      if (data.anomaly_detected) {
        setAlert("⚠️ ALERT: Suspicious Activity Detected! ⚠️");
      }
    };
    const interval = setInterval(checkAnomalies, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alert-container">
      <h2>Security Alerts</h2>
      <p className="alert-text">{alert}</p>
    </div>
  );
}
