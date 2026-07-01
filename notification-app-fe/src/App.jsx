import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Campus Evaluation</h2>
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Results</li>
          <li>Placements</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Cards Section */}
      <div className="container">
        <div className="card">
          <h3>Events</h3>
          <p>View all upcoming campus events.</p>
          <button>Open</button>
        </div>

        <div className="card">
          <h3>Results</h3>
          <p>Check semester examination results.</p>
          <button>Open</button>
        </div>

        <div className="card">
          <h3>Placements</h3>
          <p>Latest placement drives and companies.</p>
          <button>Open</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 Campus Evaluation System
      </footer>
    </div>
  );
}

export default App;
