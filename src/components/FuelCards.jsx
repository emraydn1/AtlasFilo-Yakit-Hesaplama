function FuelCards({ fuel, setFuel, prices }) {
  return (
    <section className="dashboard-grid fuel-grid">
      <div
        className={`dashboard-card fuel-card ${
          fuel === "motorin" ? "active" : ""
        }`}
        onClick={() => setFuel("motorin")}
      >
        <div className="card-top">
          <span className="card-icon">🚛</span>
          <span className="card-badge">MOTORİN</span>
        </div>

        <div className="card-price">
          {prices.motorin.toFixed(2)} <small>TL</small>
        </div>

        <div className="card-info">Güncel Pompa Fiyatı</div>
      </div>

      <div
        className={`dashboard-card fuel-card ${
          fuel === "benzin" ? "active" : ""
        }`}
        onClick={() => setFuel("benzin")}
      >
        <div className="card-top">
          <span className="card-icon">🚗</span>
          <span className="card-badge">BENZİN</span>
        </div>

        <div className="card-price">
          {prices.benzin.toFixed(2)} <small>TL</small>
        </div>

        <div className="card-info">Güncel Pompa Fiyatı</div>
      </div>
    </section>
  );
}

export default FuelCards;
