import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  const calculate = () => {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    
    if (isNaN(inputNumber)) {
      document.getElementById('result').innerText = "";
      return;
    }

    const result = (inputNumber * 2) - 0.01;
    const formula = `${inputNumber} × 2 - 0.01`;

    document.getElementById('result').innerHTML = `Selling Price: <span class="result">${result.toFixed(2)}</span><br><span class="formula">(${formula})</span>`;
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>🛒 Supermarket Together Price Calculator</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="container">
        <h1>Supermarket Price Calculator</h1>
        <p className="subtitle">Calculate optimal selling price from purchase cost</p>
        <input
          type="number"
          id="inputNumber"
          placeholder="Enter cost price"
          inputMode="decimal"
          min="0"
          step="0.01"
          onChange={calculate}
        />
        <p id="result"></p>
      </main>
      <a href="https://github.com/ZoniBoy00" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="View GitHub Profile">
        <svg className="github-icon" viewBox="0 0 16 16" width="32" height="32" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M8 0C4.42 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.8 7.8 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
        </svg>
      </a>
      <Analytics />
      <SpeedInsights />
    </>
  );
}