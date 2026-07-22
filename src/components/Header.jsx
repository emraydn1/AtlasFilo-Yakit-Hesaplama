function Header({ updatedAt }) {
  return (
    <>
      <header className="app-header">
        <div className="header-left">
          <div>
            <h1>
              ATLASFİLO <span>- EXTRAKART</span> HESAPLAMA ARACI
            </h1>
            <p>Güncel akaryakıt fiyatları ve indirim oranlarına göre tasarruf hesaplayın</p>
          </div>
        </div>

        <div className="header-right">
          <div className="live-chip">
            <span className="dot"></span>
            CANLI FİYAT
          </div>
        </div>
      </header>

      <div className="update-info">
        <span>◷</span>
        Son Güncelleme: <strong>{updatedAt || "--.--.---- --:--"}</strong>
      </div>
    </>
  );
}

export default Header;
