function ResultCard({
  selectedFuel,
  prices,
  discount,
  manualDiscount,
  useManualDiscount,
}) {
  const pumpPrice = prices[selectedFuel] || 0;

  const activeDiscount = useManualDiscount
    ? Number(manualDiscount || 0)
    : Number(discount);

  const discountAmount = (pumpPrice * activeDiscount) / 100;
  const netPrice = pumpPrice - discountAmount;

  return (
    <section className="result-section">
      <div className="result-card saving-card">
        <span className="result-label">Litre Başına Kazanç</span>

        <div className="result-value red">
          {discountAmount.toFixed(2)} TL
        </div>

        <small>İndirim tutarı</small>
      </div>

      <div className="result-card net-card">
        <span className="result-label">Net Litre Fiyatı</span>

        <div className="result-value blue">
          {netPrice.toFixed(2)} TL
        </div>

        <small>İndirim uygulanmış fiyat</small>
      </div>
    </section>
  );
}

export default ResultCard;
