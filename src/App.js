import React from "react";
import LandingPage from "./scenes/LandingPage";
import { fetchCommonStocksAsync } from "./features/store/slices/commonStockSlice";
import { fetchCompanyDataAsync } from "./features/store/slices/companyDataSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorAlert from "./components/Error/ErrorAlert";
function App() {
  useEffect(() => {
    dispatch(fetchCommonStocksAsync());
  }, []);
  //Stock symbol data
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.stockReports);
  // Stupid Error alert management that needs fixing
  const [showError, setShowError] = useState(true);
  const handleClose = () => {
    setShowError(false);
  };

  if (loading) {
    // TODO optimize loaders
    return <div>Loading...</div>;
  }

  if (error) {
    //TODO: optimize error alerts
    return <ErrorAlert message={error} onClose={handleClose} />;
  }

  return (
    // Routing with REACT router if needed will be here
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
