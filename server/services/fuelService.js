const axios = require("axios");

const API_URL = "https://api.opet.com.tr/api/fuelprices/allprices";

async function getFuelPrices() {
  try {
    const { data } = await axios.get(API_URL);

    console.log("Toplam kayıt:", data.length);

    // İstanbul kayıtlarını göster
    const istanbul = data.filter(item =>
      item.provinceName &&
      item.provinceName.toUpperCase().includes("İSTANBUL")
    );

    console.log("İstanbul kayıtları:");
    console.log(istanbul);

    if (istanbul.length === 0) {
      throw new Error("İstanbul kaydı bulunamadı.");
    }

    const station = istanbul[0];

    const benzin = station.prices.find(
      p => p.productName === "Kurşunsuz Benzin 95"
    );

    const motorin = station.prices.find(
      p => p.productName.includes("Motorin")
    );

    return {
      gasoline: benzin ? benzin.amount : 0,
      diesel: motorin ? motorin.amount : 0,
      updatedAt: new Date().toLocaleString("tr-TR")
    };

  } catch (err) {

    console.error("========== HATA ==========");
    console.error(err);
    console.error("==========================");

    throw err;
  }
}

module.exports = {
  getFuelPrices
};