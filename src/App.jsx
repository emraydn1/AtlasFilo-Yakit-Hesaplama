import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import FuelCards from "./components/FuelCards";
import DiscountCards from "./components/DiscountCards";
import ManualDiscount from "./components/ManualDiscount";
import ResultCard from "./components/ResultCard";
import SavingsCard from "./components/SavingsCard";

const API_URL =
  import.meta.env.VITE_API_URL || "https://atlasfilo-api.onrender.com";

function App() {
  const [prices, setPrices] = useState({
    benzin: 0,
    motorin: 0,
  });

  const [updatedAt, setUpdatedAt] = useState("");

  const [selectedFuel, setSelectedFuel] = useState("motorin");
  const [discount, setDiscount] = useState(4.75);

  const [useManualDiscount, setUseManualDiscount] = useState(false);
  const [manualDiscount, setManualDiscount] = useState("");

  const [monthlyAmount, setMonthlyAmount] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(`${API_URL}/fuel-prices`);

        const data = await response.json();

        if (data.success) {
          setPrices({
            benzin: Number(data.prices.benzin),
            motorin: Number(data.prices.motorin),
          });

          setUpdatedAt(data.updatedAt);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header updatedAt={updatedAt} />

        <div className="top-dashboard">
          <FuelCards
            fuel={selectedFuel}
            setFuel={setSelectedFuel}
            prices={prices}
          />

          <DiscountCards
            discount={discount}
            setDiscount={setDiscount}
          />
        </div>

        <ManualDiscount
          manualDiscount={manualDiscount}
          setManualDiscount={setManualDiscount}
          useManualDiscount={useManualDiscount}
          setUseManualDiscount={setUseManualDiscount}
          monthlyAmount={monthlyAmount}
          setMonthlyAmount={setMonthlyAmount}
        />

        <ResultCard
          selectedFuel={selectedFuel}
          prices={prices}
          discount={discount}
          manualDiscount={manualDiscount}
          useManualDiscount={useManualDiscount}
        />

        <SavingsCard
          monthlyAmount={monthlyAmount}
          prices={prices}
          selectedFuel={selectedFuel}
          discount={discount}
          manualDiscount={manualDiscount}
          useManualDiscount={useManualDiscount}
        />
      </div>
    </div>
  );
}

export default App;
