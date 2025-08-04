import { useEffect, useState } from "react";
import "../styles/home.css";
import DropDown from "../components/Dropdown/Dropdown";
import BaseInput from "../components/BaseInput/BaseInput";
import TargetOutput from "../components/TargetOutput/TargetOutput";
import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay";
import "../styles/typography.css";
import {
  ApiCurrencyService,
  type CurrencyService,
} from "../services/CurrencyService";
import e from "cors";

interface HomePageProps {
  currencyService: CurrencyService;
}
//Test

const HomePage: React.FC<HomePageProps> = ({ currencyService }) => {
  const [baseAmount, setBaseAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("SGD");
  const [targetCurrency, setTargetCurrency] = useState("AUD");
  const [error, setError] = useState("");
  const [currencyData, setCurrencyData] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    ApiCurrencyService.fetchRates()
      .then((data) => {
        console.log("✅ Fetched rates:", data);
        setCurrencyData(data);
        setError("");
      })
      .catch((err) => {
        console.error("❌ Failed to fetch rates:", err);
        setError("Failed to load currency data");
      });
  }, []);

  useEffect(() => {
    if (!baseAmount || isNaN(Number(baseAmount))) {
      setTargetAmount("");
      setError("Please enter a valid base amount");
      return;
    }
    if (!currencyData[baseCurrency] || !currencyData[targetCurrency]) return;

    const conversionRate =
      currencyData[targetCurrency] / currencyData[baseCurrency];
    setTargetAmount((Number(baseAmount) * conversionRate).toFixed(2));
    setError("");
  }, [baseAmount, baseCurrency, targetCurrency]);

  return (
    <div className="converter-container">
      <h3 className="title">Currency Converter</h3>
      <div className="split-container">
        <div>
          <BaseInput
            label="Base Amount"
            value={baseAmount}
            onChange={(value) => {
              setBaseAmount(value);
            }}
            placeholder="Enter Base Amount"
          />
          <DropDown
            options={Object.keys(currencyData)}
            value={baseCurrency}
            onSelect={(option) => {
              setBaseCurrency(option);
            }}
            placeHolder="Select Base Currency"
          />
        </div>
        <div>
          <TargetOutput
            label="Converted Amount"
            value={targetAmount}
            currency={targetCurrency}
          />

          <DropDown
            options={Object.keys(currencyData)}
            value={targetCurrency}
            onSelect={(option) => {
              setTargetCurrency(option);
            }}
            placeHolder="Select Target Currency"
          />
        </div>
      </div>

      {/* error message */}
      <ErrorDisplay message={error} />
    </div>
  );
};

export default HomePage;
