function SavingsCard({
  monthlyAmount,
  prices,
  selectedFuel,
  discount,
  manualDiscount,
  useManualDiscount,
}) {
  const amount = Number(monthlyAmount) || 0;

  const activeDiscount = useManualDiscount
    ? Number(manualDiscount || 0)
    : Number(discount);

  const litrePrice = prices[selectedFuel] || 0;

  const savingPerLitre = (litrePrice * activeDiscount) / 100;

  const monthlySaving =
    litrePrice > 0 ? (amount / litrePrice) * savingPerLitre : 0;

  const yearlySaving = monthlySaving * 12;
  const approximateConsumption =
    litrePrice > 0 ? amount / litrePrice : 0;

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-title">Yaklaşık Tüketim</span>
        <strong>{approximateConsumption.toFixed(1)} LT</strong>
      </div>

      <div className="stat-card">
        <span className="stat-title">Litre Kazancı</span>
        <strong>{savingPerLitre.toFixed(2)} TL</strong>
      </div>

      <div className="stat-card">
        <span className="stat-title">Aylık Tasarruf</span>
        <strong>{monthlySaving.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL</strong>
      </div>

      <div className="stat-card highlight">
        <span className="stat-title">Yıllık Tasarruf</span>
        <strong>{yearlySaving.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL</strong>
      </div>
    </section>
  );
}

export default SavingsCard;
