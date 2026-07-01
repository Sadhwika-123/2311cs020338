import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">Campus Evaluation</h1>

      <div className="card-container">

        {/* EVENTS CARD */}
        <div className="card">
          <h2>Events</h2>
          <p>View all upcoming campus events.</p>
          <button onClick={() => navigate("/events")}>
            Open
          </button>
        </div>

        {/* RESULTS CARD */}
        <div className="card">
          <h2>Results</h2>
          <p>Check semester examination results.</p>
          <button onClick={() => navigate("/results")}>
            Open
          </button>
        </div>

        {/* PLACEMENTS CARD */}
        <div className="card">
          <h2>Placements</h2>
          <p>Latest placement drives and companies.</p>
          <button onClick={() => navigate("/placements")}>
            Open
          </button>
        </div>

      </div>
    </div>
  );
}