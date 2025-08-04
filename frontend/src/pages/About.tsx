import { useState } from "react";

const AboutPage = () => {
    const [baseAmount, setBaseAmount] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [baseCurrency, setBaseCurrency] = useState('SGD');
    const [targetCurrency, setTargetCurrency] = useState('AUD');
    const [error, setError] = useState('');
    const [currencyData, setCurrencyData] = useState<{ [key: string]: number }>({});

    if (error) {
        setError(error);
    }

    const handleConvert = () => {
        if (!baseAmount || isNaN(Number(baseAmount))) {
            setError('Please enter a valid amount');
            return;
        }

        if (!currencyData[baseCurrency] || !currencyData[targetCurrency]) {
            setError('Currency data not available');
            return;
        }

        const conversionRate = currencyData[targetCurrency] / currencyData[baseCurrency];
        const convertedAmount = (Number(baseAmount) * conversionRate).toFixed(2);
        setTargetAmount(convertedAmount);
        setError('');
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <input
                type="number"
                value={baseAmount}
                onChange={(e) => setBaseAmount(e.target.value)}
            />
            <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
            />
            <select
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
            >
                {Object.keys(currencyData).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button onClick={handleConvert}>Convert</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default AboutPage;
