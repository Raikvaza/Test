const API_KEY = "pk_bc7dc16216b34e448029c36f62f05f7a";
const symbolsURL = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${API_KEY}`;

// Fetch stock reports by symbol
const fetchStockReports = async () => {
  const symbols = "AAPL";
  const types = "chart"; // Use 'chart' for historical data
  const range = "3m"; // Choose a suitable range (1m = 1 month, 1d = 1 day, etc.)
  const url = `https://cloud.iexapis.com/stable/stock/${symbols}/${types}?range=${range}&displayPercent=true&token=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // I remove unnecessary data
    const extractedData = data.reverse().map((item) => ({
      date: item.date,
      open: item.open.toFixed(2),
      close: item.close.toFixed(2),
      high: item.high.toFixed(2),
      low: item.low.toFixed(2),
      changePercent: `${item.changePercent.toFixed(2)} %`,
    }));

    console.log(extractedData);
    return extractedData;
  } catch (error) {
    throw error;
  }
};

// Fetch companies' data and symbols list
const fetchStockData = async () => {
  try {
    const response = await fetch(symbolsURL);
    const data = await response.json();

    const commonStocks = data
      .filter((item) => item.type === "cs")
      .map((item) => ({
        symbol: item.symbol,
        region: item.region,
        currency: item.currency,
        name: item.name,
        exchangeName: item.exchangeName,
      }));

    console.log(commonStocks);
  } catch (error) {
    console.error("Error:", error);
  }
};

export { fetchStockReports, fetchStockData };
