const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function updateFuel() {
  try {
    const { data } = await axios.get(
      "https://api.opet.com.tr/api/fuelprices/allprices",
      {
        timeout: 15000,
      }
    );

    const station = data.find(
      (x) => x.provinceName === "İSTANBUL AVRUPA"
    );

    if (!station) {
      throw new Error("İSTANBUL AVRUPA bulunamadı");
    }

    const gasoline = station.prices.find(
      (p) => p.productCode === "A100"
    );

    const diesel = station.prices.find(
      (p) => p.productCode === "A121"
    );

    const fuel = {
      gasoline: Number(gasoline.amount),
      diesel: Number(diesel.amount),
      updatedAt: new Date().toLocaleString("tr-TR"),
    };

    fs.writeFileSync(
      path.join(__dirname, "fuel.json"),
      JSON.stringify(fuel, null, 2)
    );

    console.log("fuel.json güncellendi");
  } catch (e) {
    console.error(e);
  }
}

updateFuel();
