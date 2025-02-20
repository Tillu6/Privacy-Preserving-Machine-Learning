import React from "react";

export default function TrainingMonitor({ status }) {
  return (
    <div className="monitor-container">
      <h2>Training Status</h2>
      <p className="neon-text">{status}</p>
    </div>
  );
}
