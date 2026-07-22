function DiscountCards({ discount, setDiscount }) {
  const cards = [
    {
      value: 4.75,
      title: "%4.75",
      subtitle: "Ticari Araç",
    },
    {
      value: 3.5,
      title: "%3.50",
      subtitle: "Meslek İndirimi",
    },
  ];

  return (
    <section className="dashboard-grid discount-grid">
      {cards.map((card) => (
        <div
          key={card.value}
          className={`dashboard-card discount-card ${
            discount === card.value ? "active" : ""
          }`}
          onClick={() => setDiscount(card.value)}
        >
          <div className="discount-title">{card.title}</div>
          <div className="discount-subtitle">{card.subtitle}</div>
        </div>
      ))}
    </section>
  );
}

export default DiscountCards;