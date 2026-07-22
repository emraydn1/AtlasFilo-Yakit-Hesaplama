function ManualDiscount({
  manualDiscount,
  setManualDiscount,
  useManualDiscount,
  setUseManualDiscount,
  monthlyAmount,
  setMonthlyAmount,
}) {
  return (
    <section className="input-section">
      <div className="input-card">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={useManualDiscount}
            onChange={(e) => setUseManualDiscount(e.target.checked)}
          />
          Manuel iskonto oranı kullan
        </label>

        <input
          type="number"
          step="0.01"
          placeholder="İskonto Oranı (%)"
          value={manualDiscount}
          disabled={!useManualDiscount}
          onChange={(e) => setManualDiscount(e.target.value)}
        />
      </div>

      <div className="input-card">
        <label>Aylık Yakıt Harcamanız (TL)</label>

        <input
          type="number"
          placeholder="Örn: 10000"
          value={monthlyAmount}
          onChange={(e) => setMonthlyAmount(e.target.value)}
        />
      </div>
    </section>
  );
}

export default ManualDiscount;