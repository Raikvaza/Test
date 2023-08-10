//YOUR API KEY HERE
const API_KEY = "МЕСТО ДЛЯ КЛЮЧА";
// TODO: Organize the code into separate files
//Fetch selected company data
const fetchCompanyData = async (symbol) => {
  const detailsURL = `https://api.iex.cloud/v1/data/core/quote/${symbol}?token=${API_KEY}`;
  const logoURL = `https://api.iex.cloud/v1/stock/${symbol}/logo?token=${API_KEY}`;

  try {
    const [detailsResponse, logoResponse] = await Promise.all([
      fetch(detailsURL),
      fetch(logoURL),
    ]);

    if (!detailsResponse.ok || !logoResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const detailsData = await detailsResponse.json();
    const logoData = await logoResponse.json();

    const filteredDetails = {
      companyName: detailsData[0].companyName,
      symbol: detailsData[0].symbol,
      latestPrice: detailsData[0].latestPrice,
      change: detailsData[0].change,
      changePercent: detailsData[0].changePercent,
      previousClose: detailsData[0].previousClose,
      open: detailsData[0].open,
      high: detailsData[0].high,
      low: detailsData[0].low,
      week52High: detailsData[0].week52High,
      week52Low: detailsData[0].week52Low,
      latestVolume: detailsData[0].latestVolume,
      avgTotalVolume: detailsData[0].avgTotalVolume,
      marketCap: detailsData[0].marketCap,
      peRatio: detailsData[0].peRatio,
      ytdChange: detailsData[0].ytdChange,
      primaryExchange: detailsData[0].primaryExchange,
      currency: detailsData[0].currency,
      latestTime: detailsData[0].latestTime,
    };
    return {
      details: filteredDetails,
      logo: logoData.url,
    };
  } catch (error) {
    // Handle the error appropriately
    console.error("Error fetching company data:", error);
    throw error;
  }
};
// Fetch stock reports by symbol
const fetchStockReports = async (symbol) => {
  // const symbols = "AAPL";
  const types = "chart"; // Use 'chart' for historical data
  const range = "3m"; // Choose a suitable range (1m = 1 month, 1d = 1 day, etc.)
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/${types}?range=${range}&displayPercent=true&token=${API_KEY}`;

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

    return extractedData;
  } catch (error) {
    throw error;
  }
};

// Fetch companies' data and symbols list
const symbolsURL = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${API_KEY}`;
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
    console.log(commonStocks[0].name);
    console.log(commonStocks);
    return commonStocks;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { fetchStockReports, fetchStockData, fetchCompanyData };
