import React, { useState } from "react";
import CyberDashboard from "./components/CyberDashboard";
import TrainingMonitor from "./components/TrainingMonitor";
import SecurityAlerts from "./components/SecurityAlerts";
import "./styles.css";

export default function App() {
  const [trainingStatus, setTrainingStatus] = useState("Idle");

  const startTraining = async () => {
    setTrainingStatus("Training in Progress...");
    try {
      const response = await fetch("http://localhost:5000/train", { method: "POST" });
      const data = await response.json();
      setTrainingStatus(data.message);
    } catch (error) {
      console.error("Error during training:", error);
      setTrainingStatus("Error during training.");
    }
  };
  

  return (
    <div className="cyber-bg">
      <h1 className="neon-glow">Privacy-Preserving ML</h1>
      <CyberDashboard />
      <TrainingMonitor status={trainingStatus} />
      <SecurityAlerts />
      <button onClick={startTraining} className="cyber-button">Start Training</button>
    </div>
  );
}
