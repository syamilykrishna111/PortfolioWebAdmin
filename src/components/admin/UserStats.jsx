const UserStats = () => {
  return (
    <section className="row g-3">
      <div className="col-md-3">
        <div className="metric-card">
          <h6>Total Users</h6>
          <h2>8,742</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="metric-card">
          <h6>Active</h6>
          <h2>7,980</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="metric-card">
          <h6>Pending</h6>
          <h2>184</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="metric-card">
          <h6>Suspended</h6>
          <h2>38</h2>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
